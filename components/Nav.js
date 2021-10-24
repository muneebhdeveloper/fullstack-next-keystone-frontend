import Link from "next/link";
import NavStyles from "../styles/NavStyles";

function Nav() {
  return (
    <NavStyles>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/account">Account</Link>
      <Link href="/cart">My Cart</Link>
    </NavStyles>
  );
}

export default Nav;
