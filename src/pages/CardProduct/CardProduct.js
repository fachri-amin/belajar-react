import React, { Component, Fragment } from 'react';
import './CardProduct.css';
import Counter from '../../components/Counter/Counter';



class CardProduct extends Component {
    // state = {
    //     order: 0,
    // }

    // handleCounterChange = (newValue) => { // ini adalah method yang akan mengirimkan nilai state kedalam props yang sudah dibuat di component parent
    //     this.props.onCounterChange(newValue);// memasukkan nilai state kedalam props
    // }

    // handlePlus = () => { //ini adalah method yang dijalankan ketika button plus di klik
    //     this.setState({
    //         order: this.state.order + 1, // mengganti nilai state
    //     }, () => {
    //         this.handleCounterChange(this.state.order);// memasukkan nilai state yang terbaru kedalam props
    //         //ini harus dimasukkan sebagai parameter dari method setStste agar nilai state pada component parent ikut terganti
    //     });

    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1,
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }

    render() {
        return (
            <div className='card'>
                <div className="img-thumb-prod">
                    <img src="https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <p className="product-title">Ayam Bumbu</p>
                <p className="product-price">Rp 40.000</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;