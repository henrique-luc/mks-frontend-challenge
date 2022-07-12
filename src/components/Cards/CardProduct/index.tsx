import { ListContainer } from "./style";
import { RiShoppingBag3Line } from "react-icons/ri";

export const ListProducts = () => {
  return (
    <ListContainer>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section>
            <h3>Apple Watch Series 4 Gps</h3>
            <p>R$399</p>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
    </ListContainer>
  );
};
