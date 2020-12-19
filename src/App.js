import logo from './logo.svg';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

import BlogPost from './pages/BlogPost/BlogPost';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import DetailPost from './pages/BlogPost/DetailPost/DetailPost';

function App() {

  const new_user = <strong>Fachri</strong>; // ini adalah contoh penggunaan jsx yang memungkinkan kita untuk menggunakan tag html dalam js

  return (
    <Router>
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Home} /> {/* exact untuk membatasi walaupun di route lain ada / dia tidak akan terpanggil*/}
        <Route path="/product" component={Product} />
        <Route path="/blog" exact component={BlogPost} />
        <Route path="/blog/detail/:id" component={DetailPost} />
      </Fragment>
    </Router>
  );
}

export default App;
