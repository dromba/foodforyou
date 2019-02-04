import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  items = [];

  fillList = () => {
    if (this.props.items) {
      this.items = this.props.items;
    } else {
      this.items = this.props.location.items;
    }
  };

  populateList = () => {
    return this.items.map((el, i) => {
      return (
        <ListItem key={i} item={el} deleteFromList={this.props.deleteFromList} />
      );
    });
  };

  render() {
    this.fillList();
    if (!this.items) {
      return <ul className="list" />;
    }
    return <ul className="list">{this.populateList()}</ul>;
  }
}

export default List;
