import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/partials/Header';

export const Layout = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}
