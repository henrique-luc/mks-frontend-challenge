import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 18px;

  .card_container {
    display: flex;
    flex-direction: column;
    width: 250.5px;
    height: 328px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: var(--border-radius);
  }

  figcaption {
    display: none;
  }

  .card_container-info {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
