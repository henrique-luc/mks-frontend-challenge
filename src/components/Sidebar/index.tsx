import { AiFillCloseCircle } from "react-icons/ai";
import { Container } from "./style";

export const Sidebar = ({ active }: any) => {
  const CloseSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <AiFillCloseCircle onClick={CloseSidebar} size={30} />
    </Container>
  );
};
