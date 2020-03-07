import React from 'react';
import FileUpload from "./pages/FileUpload";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
/* import { StyleSheet, css } from 'aphrodite'; */

function App() {

  return ( 
    <>
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/FileUpload">Download do arquivo</Link>
              </li>
              {/* <li>
                <Link className= {css(styles.link)} to="/kitchen">Cozinha</Link> 
              </li> */}
            </ul>
          </nav>
          
          <Route exact path="/FileUpload" component={FileUpload}/>
          {/* <Route exact path="/kitchen" component={Kitchen}/> */}
        </Router>
  </>
  )
}

export default App;