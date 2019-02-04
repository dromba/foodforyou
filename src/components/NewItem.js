import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleClick = () => {
    const item = {
      id: this.props.location.newID,
      name: this.refs.name.value,
      img_url: this.refs.img_url.value,
      price: this.refs.price.value,
      description: this.refs.description.value
    };

    this.props.location.addItemToList(item);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="new-item">
        <div className="new-item-row">
          <div className="input-title-wrapper">
            <p className="input-title">Item Name</p>
          </div>
          <div className="input-wrapper">
            <input type="text" ref="name" />
          </div>
        </div>
        <div className="new-item-row">
          <div className="input-title-wrapper">
            <p className="input-title">Image URL</p>
          </div>
          <div className="input-wrapper">
            <input type="text" ref="img_url" />
          </div>
        </div>
        <div className="new-item-row">
          <div className="input-title-wrapper">
            <p className="input-title">Price</p>
          </div>
          <div className="input-wrapper">
            <input type="text" ref="price" />
          </div>
        </div>
        <div className="new-item-row">
          <div className="input-title-wrapper">
            <p className="input-title">Description</p>
          </div>
          <div className="input-wrapper">
            <textarea
              className="input-description"
              type="text"
              ref="description"
            />
          </div>
        </div>
        <button className="add-btn" onClick={this.handleClick}>
          ADD ITEM
        </button>
      </div>
    );
  }
}

export default NewItem;
