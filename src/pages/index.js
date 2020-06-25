import Layout from "../../components/layout";
import Book from "./../../components/book";
import { useState } from "react";

export default function Index({ books }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  if(!books) return <h1>Loading</h1>
  if (books)
  var booksByFilter = books.books.filter(book => {
    const regex = new RegExp(`${title}`, "gi");
    return book.title.match(regex)
  })

  return (
    <Layout>
      <div className="search_">
        <h1>Search book:</h1>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="book title here"
          id=""
        />
      </div>

      <ul className="list_books">
        {booksByFilter.map((b, key) => (
          <Book book={b} key={key} />
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {

  const url  = new Request('/api/books')

  const res = await fetch(url).then((res) =>
    res.json()
  );

  const books = res;

  return {
    props: { books },
  };
}
