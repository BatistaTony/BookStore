import Layout from "../../components/layout";
import Book from "./../../components/book";
import { useState } from "react";
import absoluteUrl from "next-absolute-url";
import { IBook } from "../../components/types";
import { NextApiRequest } from "next";

interface IProps {
  books: Array<IBook>;
}

export default function Index({ books }: IProps) {
  const [title, setTitle] = useState<string>("");

  const AllBooks: Array<IBook> = books;

  const handleChange = (event: any) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  if (!books) return <h1>Loading</h1>;
  if (books)
    var booksByFilter = AllBooks.filter((book): IBook | any => {
      const regex = new RegExp(`${title}`, "gi");
      return book.title.match(regex);
    });

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

interface IServerProps {
  req: NextApiRequest;
}

export async function getServerSideProps({ req }: IServerProps) {
  const { origin } = await absoluteUrl(req, req.headers.host);

  const res = await fetch(origin + "/api/books").then((res) => res.json());

  const books: Array<IBook> = res;

  return {
    props: { books },
  };
}
