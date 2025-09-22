import { ALL_PRODUCTS } from "./actionTypes";

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

interface Testes {
  products: Product[];
}

const initialState: Testes = {
  products: [
    {
      id: 1,
      name: "oi",
      brand: "oi",
      description: "oi",
      photo: "oi",
      price: "10",
    },
  ],
};

//const initialState = {
//  firstName: "henrique",
//  lastName: "silva",
//};

export const reducerProducts = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return state;

    default:
      return state;
  }
};
