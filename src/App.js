import React, {Component} from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Items from './Components/Items/Item';
import SelectedItem from './Components/Items/selectedItem';

import {Provider} from 'react-redux'
import store from "./store";

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <section className="main">
            <div className="box-container">
              <div className="box">
                <Items/>
              </div>
              <div className="box">
                <SelectedItem />
              </div>
            </div>
          </section>
        </div>
      </Provider>
    );
  }

}

export default App;