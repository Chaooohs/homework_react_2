import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";

import { Menu } from './menu/menu';

// function App() {
//   return <Menu />
// }

// ReactDOM.render(<App/>, document.querySelector('.one'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Menu />} ></Route>
  )
);

ReactDOM.createRoot(document.querySelector(".one")).render(
    <RouterProvider router={router} />
);