import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Layout} from "../Layout";
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import { CreatePost } from '../pages/CreatePost';
import { PostPage } from '../pages/PostPage';
import { RequireAuth } from './RequireAuth';


export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<RequireAuth><CreatePost /></RequireAuth>} />
        <Route path='/create/:id' element={<RequireAuth><CreatePost /></RequireAuth>} />
        <Route path='/post/:id' element={<RequireAuth><PostPage /></RequireAuth>} />
        <Route path='*' element={<div>Not Found 404</div>} />
      </Route>
    </Routes>
  )
}
