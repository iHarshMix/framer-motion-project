import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/Root'
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';



function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    // setPizza({ ...pizza, base }) // in mordern ES6 we can write this and it will make it in the below form automatically, (used in Reactjs maximilian course)
    setPizza({ ...pizza, base: base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/base',
          element: <Base addBase={addBase} pizza={pizza} />
        },
        {
          path: '/toppings',
          element: <Toppings addTopping={addTopping} pizza={pizza} />
        },
        {
          path: '/order',
          element: <Order pizza={pizza} />
        }
      ]
    }

  ])


  return (
    <RouterProvider router={router} />
  );

}

export default App;