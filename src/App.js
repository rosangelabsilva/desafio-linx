import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { StyleSheet, css } from 'aphrodite';
import FileUpload from "./pages/FileUpload";
import Products from "./pages/Products";
import Data from "./pages/Data";

function App() {

  return ( 
    <>
      <Router>
          <nav className={css(styles.nav)}>
            <ul className={css(styles.ul)}>
              <li className={css(styles.link)}>
                <Link to="/">Listagem de Produtos</Link>
              </li>
              <li className={css(styles.link)}>
                <Link to="/FileUpload">Importação de Produtos</Link>
              </li>
              <li className={css(styles.link)}>
                <Link to="/Data">Importação de Dados</Link> 
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Products}/>
          <Route exact path="/FileUpload" component={FileUpload}/>
          <Route exact path="/Data" component={Data}/>
        </Router>
  </>
  )
};

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    height: 1024,
    width: 80,
    letf: 0,
    top:0,
    background: `#48185B`,
  },
  ul: {
    textDecoration: 'none',
    fontSize: 16,
    color: '#48185B',
    height: 500,
    width: 80,
    padding: 0,
  },
  link: {
    textDecorationColor: 'none',
    color: 'black',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 40
  }
});

export default App;