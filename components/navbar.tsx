import Link from "next/link";
import navStyle from './../styles/navbar.module.scss'

const Navbar = () => {
  return (
      <div className={navStyle.navbar}>
          
      <h1 className={navStyle.logo}>Book Store</h1>

      <ul className={navStyle.menu_navbar}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/cart">
          <li>Cart</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};


export default Navbar;
