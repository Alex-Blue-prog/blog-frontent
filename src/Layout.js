import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/partials/Header';
import { Footer } from './components/partials/Footer';

export const Layout = () => {
  return (
    <main>
        <Header />
        <div style={{minHeight: "calc(100vh - 98px - 76px)"}}>
          <Outlet />
        </div>
        <Footer />
    </main>
  )
}
