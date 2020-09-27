import dynamic from "next/dynamic";

const DynamicWithNoSsr = dynamic(() => import("./../../components/cartClient"), {
  ssr: false,
});

const Cart = () => {
  return <DynamicWithNoSsr />;
};

export default Cart;
