import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Layout} from "../Layout";
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import { CreatePost } from '../pages/CreatePost';


export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='*' element={<div>Not Found 404</div>} />
      </Route>
    </Routes>
  )
}
