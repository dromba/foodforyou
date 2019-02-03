import React, { Component } from 'react';
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
        }

        this.props.location.addItemToList(item);
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return(
            <div className="new-item">
                <p className="input-title">Item Name</p>
                <input type="text" ref="name" />
                <p className="input-title">Image URL</p>
                <input type="text" ref="img_url" />
                <p className="input-title">Price</p>
                <input type="text" ref="price" />
                <p className="input-title">Description</p>
                <input type="text" ref="description" />
                <button className="add-btn" onClick={this.handleClick}>ADD ITEM</button>
            </div>
        );
    }
}

export default NewItem;