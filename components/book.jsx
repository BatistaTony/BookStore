import Link from "next/link";

export default ({ book }) => {
  const dateBook = new Date(book.published);
  const dateInString =
    parseInt(dateBook.getDate() + 1) +
    "/" +
    dateBook.getMonth() +
    "/" +
    dateBook.getFullYear();

  return (
    <div className="book">
      <div className="cover"></div>
      <h1 className="title_book">{book.title}</h1>
      <h1 className="author_book">by: {book.author}</h1>
      <h5 className="price_book">$ {book.price}</h5>
      <p className="lt_b">Published in {dateInString}</p>

      <Link href="/book/[isbn]" as={"/book/" + book.isbn}>
        <button className="btn_buy">Ver mais detalhes</button>
      </Link>
    </div>
  );
};
