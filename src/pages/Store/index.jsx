import { ListProducts } from "../../components/Cards/CardProduct";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const Store = () => {
  return (
    <div>
      <Header />
      <ListProducts />
      <Footer />
    </div>
  );
};
