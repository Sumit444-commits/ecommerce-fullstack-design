// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'

// import Home from './pages/Home/Home'
// import ProductListing from './pages/Products/ProductListing'
// import PageWrapper from './pages/Products/PageWrapper'
// import ProductPageWrapper from './pages/Product/ProductPageWrapper'
// import CartPageWrapper from './pages/Cart/CartPageWrapper'

// const App = () => {
//   return (
//     <>
//     <Navbar />
//     {/* <Home /> */}
//     {/* <PageWrapper /> */}
//     {/* <ProductPageWrapper /> */}
//     <CartPageWrapper />
//     <Footer />
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
// Note: Assuming PageWrapper is your product listing page
import PageWrapper from './pages/Products/PageWrapper'; 
import ProductPageWrapper from './pages/Product/ProductPageWrapper';
import CartPageWrapper from './pages/Cart/CartPageWrapper';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar stays at the top of every page */}
        <Navbar />

        {/* The main content area that changes based on the URL */}
        <main className="flex-grow bg-[#f7f9fa]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<PageWrapper />} />
            <Route path="/product/:id" element={<ProductPageWrapper />} />
            <Route path="/cart" element={<CartPageWrapper />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;