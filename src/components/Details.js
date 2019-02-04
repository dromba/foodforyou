import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import deleteIcon from "../icons/ic_delete_dark.svg";
import backIcon from "../icons/ic_back.svg";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "DETAILS",
      redirect: false
    };
  }

  handleDelete = () => {
    this.props.location.deleteFromList(this.props.location.id);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="top-bar">
          <Link className="text" to="/">
            <img alt="back" src={backIcon} className="logo top-bar-logo logo-back" />
          </Link>
          <a className="icon" href="#" onClick={this.handleDelete}>
            <img alt="delete" src={deleteIcon} className="logo top-bar-logo logo-delete" />
          </a>
        </div>
        <div className="details-content">
          <div className="desktop-wrapper">
            <div className="content-img">
                <img className="img-big" alt={this.props.location.name} src={this.props.location.img_url} />
            </div>
            <div className="content-text">
                <p className="title">{this.props.location.name}</p>
                <p className="name">{this.props.location.price}</p>
            </div>
          </div>
          <p className="description">{this.props.location.description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
