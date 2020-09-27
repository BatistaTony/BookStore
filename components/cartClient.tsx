import Layout from "./layout";
import $ from "jquery";
import { useState } from "react";
import { IBook } from "./types";

const CartClient = () => {
  const [status, setStatus] = useState<string>(" ");
  const [cartOfBook, setCart] = useState<Array<IBook>>(
    JSON.parse(window.localStorage.getItem("cart"))
  );

  const [cardNumber, setCard] = useState<string>("");

  const confirmShop = () => {
    var re16digit = /^\d{16}$/;

    if (re16digit.exec(cardNumber)) {
      $(".overlayBuy").fadeOut();

      showYouStatus("All your books are on the way ...");
    } else {
      $(".ipt_card").addClass("shake_card");

      setTimeout(() => {
        $(".ipt_card").removeClass("shake_card");
      }, 1000);
    }
  };

  const handleChange = (e:any) => {
    e.preventDefault();

    setCard(e.target.value);
  };

  const showYouStatus = (text:string) => {
    setStatus(text);

    $(".modelStatus").animate({ opacity: "1" });

    setTimeout(() => {
      $(".modelStatus").animate({ opacity: "0" });
    }, 1000);
  };

  const showDivBuy = () => {
    $(".overlayBuy").fadeIn();
  };

  const closeDivBuy = () => {
    $(".overlayBuy").fadeOut();
  };

  const deleteBook = (id:number) => {
    const cartL: Array<IBook> = JSON.parse(window.localStorage.getItem("cart"));

    cartL.splice(id, 1);

    localStorage.setItem("cart", JSON.stringify(cartL));

    setCart(JSON.parse(window.localStorage.getItem("cart")));

    showYouStatus("Book deleted");
  };

  return (
    <Layout>
      {cartOfBook != null && typeof cartOfBook !== undefined ? (
        <div className="cart_">
          <ul className="list_cart">
            {cartOfBook.map((book, key) => (
              <li className="item_cart" key={key}>
                {key + 1} - {book.title}
                <button className="btn_delete" onClick={() => deleteBook(key)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <button className="btn_buy" onClick={showDivBuy}>
            Close cart
          </button>

          <div className="overlayBuy">
            <div className="divbuy">
              <div className="form_b">
                <h1 className="til_bu">Buy All books</h1>
                <p>Please drop your card number:</p>
                <input
                  className="ipt_card"
                  type="text"
                  placeholder="3454645645... (16-digits)"
                  name="card_number"
                  id=""
                  onChange={handleChange}
                />
                <div className="btnAll">
                  <button className="btn_buy" onClick={confirmShop}>
                    Confirm
                  </button>
                  <button className="btn_buy btn_cancel" onClick={closeDivBuy}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modelStatus">{status}</div>
        </div>
      ) : (
        <h1>Empty cart !</h1>
      )}
    </Layout>
  );
};

export default CartClient;
