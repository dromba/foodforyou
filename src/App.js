import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Details from "./components/Details";
import NewItem from "./components/NewItem";
import List from "./components/List";
import logo from "./components/ic_menu.svg";
import { CONSTANTS, ITEMS } from "./constants";

let items = ITEMS;

class App extends Component {
  addItemToList = item => {
    items.push(item);
  };

  deleteFromList = id => {
    items.forEach((el, i) => {
      if (el.id === id) {
        items.splice(i, 1);
      }
    });
  };

  toogleMenu = () => {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  hideMenu = () => {
    document.getElementById("myLinks").style.display = "none";
  }

  handleSelection = e => {
    if (e.target.innerHTML.toString().toLowerCase().includes("new")) {
      document.getElementById("new-item-menu-item").style.textDecoration = "underline";
      document.getElementById("list-menu-item").style.textDecoration = "none";
    } else {
      document.getElementById("list-menu-item").style.textDecoration = "underline";
      document.getElementById("new-item-menu-item").style.textDecoration = "none";
    }
  };

  render() {
    const toList = {
      pathname: "/",
      items: items
    };
    const toNewItem = {
      pathname: "/newitem/",
      addItemToList: this.addItemToList,
      newID: items[items.length - 1].id + 1
    };

    return (
      <Router>
        <div className="container">
          <div className="topnav">
            <div className="menu-items">
              <Link onClick={this.handleSelection} to={toList}>
                <p id="list-menu-item">{CONSTANTS.LIST}</p>
              </Link>
              <Link onClick={this.handleSelection} to={toNewItem}>
                <p id="new-item-menu-item">{CONSTANTS.ADD_NEW}</p>
              </Link>
            </div>
            <a href="#" className="active">{CONSTANTS.FOOD_FOR_YOU}</a>
            <div id="myLinks">
              <Link className="mobile-list" onClick={this.hideMenu} to={toList}>{CONSTANTS.LIST}</Link>
              <Link onClick={this.hideMenu} to={toNewItem}>{CONSTANTS.ADD_NEW}</Link>
            </div>
            <a href="javascript:void(0);" className="icon" onClick={this.toogleMenu}>
              <img alt="image" src={logo} className="logo logo-menu" />
            </a>
          </div>
          <Switch>
            <Route path="/newitem/" component={NewItem} />
            <Route path="/details/" component={Details} />
            <Route path="/" render={() => (<List items={items} deleteFromList={this.deleteFromList} />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
