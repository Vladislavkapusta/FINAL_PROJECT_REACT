import { useEffect } from "react";

// if (typeof(Storage) !== "undefined") {
//     const storedData = localStorage.getItem("myAppData");
//     if (storedData) {
//       var appData = JSON.parse(storedData);
//     } else {
//       var appData = [
//         {id: 1, title: 'Велосипед', count: 5},
//         {id: 2, title: 'Самокат', count: 4},
//         {id: 3, title: 'Гантели', count: 7},
//         {id: 4, title: 'Ракетки', count: 1}
//      ]
//     }
//   } else {
//     console.error("localStorage is not supported by your browser");
//   }
  


const defaultState = 1



 const INCREMENT_COUNT = 'INCREMENT_COUNT';
 const DECREMENT_COUNT = 'DECREMENT_COUNT';


 
export const countReducer = (state = defaultState, action) =>{

    switch (action.type){
        case INCREMENT_COUNT:
            return (
              state < 25 ? state + 1 : state
            );  
      
        case DECREMENT_COUNT:
            return (
            state > 1 ? state - 1 : state
            )
      
          default:
            return state;
    
}
}

export const incrementCount = () => ({
    type: INCREMENT_COUNT,
  });
  
export const decrementCount = () => ({
    type: DECREMENT_COUNT,
  });
  
