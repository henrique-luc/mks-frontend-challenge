import { CardCart } from "../Cards/CardCart";
import { Sidebar } from "../Sidebar";

export const Cart = ({ active }: any) => {
  return (
    <>
      <Sidebar active={active}>
        <h2>Carrinho de compras</h2>
        <CardCart />
        <section>
          <h2>Total:</h2>
          <h2>R$798</h2>
        </section>
        <button>Finalizar Compra</button>
      </Sidebar>
    </>
  );
};
