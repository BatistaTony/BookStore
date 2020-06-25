import Layout from "../../../components/layout";
import $ from "jquery";
import absoluteUrl from "next-absolute-url";
import { useRouter } from "next/router";

export default ({ book }) => {
  if (!book) return <h1>Loading...</h1>;
  if (book && typeof book !== undefined) {
    const dateBook = new Date(book.published);
    const dateInString =
      parseInt(dateBook.getDate() + 1) +
      "/" +
      dateBook.getMonth() +
      "/" +
      dateBook.getFullYear();

    const AddtoCart = async () => {
      const cart = JSON.parse(localStorage.getItem("cart"));

      if (typeof cart !== undefined && cart != null) {
        const cartIncrease = await [...cart, { ...book }];

        localStorage.setItem("cart", await JSON.stringify(cartIncrease));
      } else {
        const cartNew = await [{ ...book }];

        localStorage.setItem("cart", await JSON.stringify(cartNew));
      }

      $(".modelStatus").animate({ opacity: "1" });

      setTimeout(() => {
        $(".modelStatus").animate({ opacity: "0" });
      }, 1000);
    };

    return (
      <Layout>
        <div className="single_book">
          <div className="book_fr">
            <div className="cover_single_book"></div>
            <div className="info">
              <div>
                <h1 className="title_book">{book.title}</h1>
                <h1 className="auth_sn_book">by {book.author}</h1>{" "}
                <h5 className="price_book">$ {book.price}</h5>
                <p className="sing_t">{book.pages} pages</p>
                <p className="sing_t">Published by {book.publisher}</p>
                <p className="sing_t">Published in {dateInString}</p>
              </div>

              <button className="btn_buy" onClick={AddtoCart}>
                Add to cart
              </button>
            </div>
          </div>

          <h4 className="tit_n">Description</h4>
          <p className="description">{book.description}</p>
        </div>

        <div className="modelStatus">Add to cart with sucess</div>
      </Layout>
    );
  }
};

export async function getServerSideProps(context) {
  
  const { params: { isbn }, req } = context

  const { origin } = absoluteUrl(req, req.headers.host);

  const res = await fetch(origin + "/api/book", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ isbn: isbn }),
  }).then((res) => res.json());

  const book = await res;

  return {
    props: { book },
  };
}
