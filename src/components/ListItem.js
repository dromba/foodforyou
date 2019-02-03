import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ListItem extends Component {
    itemObject = { 
        pathname: "/details/" + this.props.item.id,
        id: this.props.item.id, 
        img_url: this.props.item.img_url,
        name: this.props.item.name,
        price: this.props.item.price,
        description: this.props.item.description,
        deleteFromList: this.props.deleteFromList
    };

    render() {
        return(
            <li className="item">
                <Link className="text" to={this.itemObject} >
                    <div className="row">
                        <div className="first"><img className="img-small" alt="burger" src={this.props.item.img_url}></img></div>
                        <div className="second"><div className="details">{this.props.item.name}</div></div>
                        <div className="third">{this.props.item.price}</div>
                    </div>
                </Link>
            </li>
        );
    }
}

export default ListItem;