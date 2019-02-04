import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import { CONSTANTS } from '../constants';
import backIcon from "../icons/ic_back.svg";

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleClick = () => {
    if (this.refs.name.value.length === 0 || this.refs.img_url.value.length === 0 || this.refs.price.value.length === 0 || this.refs.description.value.length === 0) {
      window.alert("All fields are mandatory!");
    } else {
      const item = {
        id: this.props.location.newID,
        name: this.refs.name.value,
        img_url: this.refs.img_url.value,
        price: this.refs.price.value,
        description: this.refs.description.value
      };
  
      this.props.location.addItemToList(item);
      this.setState({ redirect: true });
    }  
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <>
      <div className="top-bar">
        <Link className="text" to="/">
          <img alt="back" src={backIcon} className="logo top-bar-logo logo-back" />
        </Link>
      </div>
      <div className="new-item">
        <div className="new-item-row">
          <div className="input-title-wrapper">
            <p className="input-title">{CONSTANTS.ITEM_NAME}</p>
          </div>
          <div className="input-wrapper">
            <input type="text" ref="name" />
          </div>
        </div>
        <div className="new-item-row">
          <div className="input-title-wrapper">
            <p className="input-title">{CONSTANTS.IMAGE_URL}</p>
          </div>
          <div className="input-wrapper">
            <input type="text" ref="img_url" />
          </div>
        </div>
        <div className="new-item-row">
          <div className="input-title-wrapper">
            <p className="input-title">{CONSTANTS.PRICE}</p>
          </div>
          <div className="input-wrapper">
            <input type="text" ref="price" />
          </div>
        </div>
        <div className="new-item-row">
          <div className="input-title-wrapper">
            <p className="input-title">{CONSTANTS.DESCRIPTION}</p>
          </div>
          <div className="input-wrapper">
            <textarea className="input-description" type="text" ref="description" />
          </div>
        </div>
        <button className="add-btn" onClick={this.handleClick}>{CONSTANTS.ADD_ITEM}</button>
      </div>
      </>
    );
  }
}

export default NewItem;
