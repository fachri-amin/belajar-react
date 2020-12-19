import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';
import { connect } from 'react-redux';

// ini adalah cara mengupdate Parent oleh child component
// Component Product ini adalah Parent Component nya
// dan CardProduct merupakan component child

class Product extends Component {
    // state = { // tidak digunakan lagi karena telah menggunakan redux
    //     order: 0,
    // }

    // handlerCounterChange = (newValue)=>{
    //     this.setState({ 
    //         order: newValue,
    //     })
    // }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="" />
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => { this.handlerCounterChange(value) }} />
                {/*membuat props yang berbentuk method agar bisa membalikan nilai state dari component child
                nilai ini juga ditampung oleh method yang berada pada component parent nya */}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);