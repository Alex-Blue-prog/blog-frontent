import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Layout} from "../Layout";
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<div>Not Found 404</div>} />
      </Route>
    </Routes>
  )
}
