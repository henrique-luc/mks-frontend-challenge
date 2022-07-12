import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./Button";
import { HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="header_div-container">
        <div className="header_div-logo">
          <h1>MKS</h1>
          <h3>Sistemas</h3>
        </div>
        <div>
          <Button icon={FaShoppingCart}>0</Button>
        </div>
      </div>
    </HeaderContainer>
  );
};
