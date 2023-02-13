const TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
}

export const ShoppingInitialState = {
    products: [
        {
          "id": "01",
          "name": "Café Americano",
          "price": "$ 5",
          "url": "https://i.postimg.cc/vmNj0bXr/cafe.jpg",
          "type": "Desayuno",
          "dateEntry": "2023"
        },
        {
          "id": "02",
          "name": "Café con Leche",
          "price": "$ 7",
          "url": "https://i.postimg.cc/yNQSb701/cafe-con-leche.webp",
          "type": "Desayuno",
          "dateEntry": "2023"
        },
        {
          "id": "03",
          "name": "Sandwich de Jamón y Queso",
          "price": "$ 10",
          "url": "https://i.postimg.cc/wTprfW5G/sandwich.jpg",
          "type": "Desayuno",
          "dateEntry": "2023"
        },
        {
          "id": "04",
          "name": "Jugo de Frutas Natural",
          "price": "$ 7",
          "url": "https://i.postimg.cc/BnZVsXV5/jugo.webp",
          "type": "Desayuno",
          "dateEntry": "2023"
        },
        {
          "id": "05",
          "name": "Hamburguesa Simple",
          "price": "$ 10",
          "url": "https://i.postimg.cc/sgsbpjLx/hamburguesa-simple.jpg",
          "type": "Comida",
          "dateEntry": "2023"
        },
        {
          "id": "06",
          "name": "Hamburguesa Doble",
          "price": "$ 15",
          "url": "https://i.postimg.cc/L6MWp42D/hamburguesa-doble.jpg",
          "type": "Comida",
          "dateEntry": "2023"
        },
        {
          "id": "07",
          "name": "Papas Fritas",
          "price": "$ 5",
          "url": "https://i.postimg.cc/52sKLwvK/papas-fritas.jpg",
          "type": "Comida",
          "dateEntry": "2023"
        },
        {
          "id": "08",
          "name": "Aros de Cebolla",
          "price": "$ 5",
          "url": "https://i.postimg.cc/SsMgB3PH/aros-de-cebolla.jpg",
          "type": "Comida",
          "dateEntry": "2023"
        },
        {
          "id": "09",
          "name": "Agua 500 ml",
          "price": "$  5",
          "url": " https://i.postimg.cc/CLfp1Gwk/botella-de-agua-sobre-la-mesa-un-d-a-soleado-en-peque-o-restaurante-una-fr-a-mineral-est-pie-165595.jpg",
          "type": "Comida",
          "dateEntry": "2023"
        },
        {
          "id": "10",
          "name": "Agua 750 ml",
          "price": "$ 7",
          "url": "https://i.postimg.cc/8k7zRr1P/73e95a8d593ce4027519e11719461614.jpg",
          "type": "Comida",
          "dateEntry": "2023"
        },
        {
          "id": "11",
          "name": "Gaseosa 500 ml",
          "price": "$ 7",
          "url": "https://i.postimg.cc/d0WJdJpy/soda-3.jpg",
          "type": "Comida",
          "dateEntry": "2023"
        },
        {
          "id": "12",
          "name": "Gaseosa 750 ml",
          "price": "$ 10",
          "url": "https://i.postimg.cc/hjzRdTVk/2249931.webp",
          "type": "Comida",
          "dateEntry": "2023"
        }
      ],
      cart: [],
};

export function shoppingReducer(state, action){
    switch (action.type){
        case TYPES.ADD_TO_CART: {

        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            
        }
        case TYPES.CLEAR_CART: {
            
        }
        default:
            return state;
    }
}
