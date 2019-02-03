import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Details from './components/Details';
import NewItem from './components/NewItem';
import List from './components/List';
import logo from './components/ic_menu.svg';

const item0 = {
  id: 0,
  img_url: "https://static.adweek.com/adweek.com-prod/wp-content/uploads/2018/10/Screen-Shot-2018-10-17-at-1.25.22-PM.png",
  name: "Burger0 Burger0 Burger0Burger0 Burger0 Burger0 Burger0 Burger0",
  price: "10.60$",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed accumsan neque. Donec at nunc congue, iaculis justo vel, iaculis est. Vestibulum sit amet mauris a erat pulvinar dignissim. Duis finibus consequat fermentum. Pellentesque vulputate metus quis erat cursus, at consectetur libero euismod. Proin convallis maximus mi, ac sollicitudin velit."
}

const item1 = {
  id: 1,
  img_url: "https://static.adweek.com/adweek.com-prod/wp-content/uploads/2018/10/Screen-Shot-2018-10-17-at-1.25.22-PM.png",
  name: "Burger1",
  price: "10.60$",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed accumsan neque. Donec at nunc congue, iaculis justo vel, iaculis est. Vestibulum sit amet mauris a erat pulvinar dignissim. Duis finibus consequat fermentum. Pellentesque vulputate metus quis erat cursus, at consectetur libero euismod. Proin convallis maximus mi, ac sollicitudin velit."
}

const item2 = {
  id: 2,
  img_url: "https://static.adweek.com/adweek.com-prod/wp-content/uploads/2018/10/Screen-Shot-2018-10-17-at-1.25.22-PM.png",
  name: "Burger2",
  price: "10.60$",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed accumsan neque. Donec at nunc congue, iaculis justo vel, iaculis est. Vestibulum sit amet mauris a erat pulvinar dignissim. Duis finibus consequat fermentum. Pellentesque vulputate metus quis erat cursus, at consectetur libero euismod. Proin convallis maximus mi, ac sollicitudin velit."
}

let items = [item0, item1, item2];

class App extends Component {
  addItemToList = item => {
    items.push(item);
  }

  deleteFromList = id => {
    items.forEach((el, i) => {
      if (el.id === id) {
        items.splice(i, 1);
      }
    });
  }

  toogleMenu = () => {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  render() {
    const toList = {
      pathname: "/",
      items: items
    }
    const toNewItem = {
      pathname: "/newitem/",
      addItemToList: this.addItemToList,
      newID: items[items.length - 1].id + 1 
    }

    return (
      <Router>
        <div className="container">
        <div className="topnav">
          <a href="#" className="active">LIST</a>
          <div id="myLinks">
            <Link to={toList}>List</Link>
            <Link to={toNewItem}>New Item</Link>
          </div>
          <a href="javascript:void(0);" className="icon" onClick={this.toogleMenu}>
            <img alt="image" src={logo} className="logo" />
          </a>
        </div>
        <Switch>
            <Route path="/newitem/" component={NewItem} />
            <Route path="/details/" component={Details} />
            <Route path="/" render={() => <List items={items} deleteFromList={this.deleteFromList}/>} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
