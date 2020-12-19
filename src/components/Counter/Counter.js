import React, { Component, Fragment } from 'react';
import './Counter.css';
import { connect } from 'react-redux';
import ActionType from '../../redux/reducer/globalActionType';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <button onClick={this.props.handleMinus} className="minus">-</button> {/* memanggil sebuah method pada ketika event onClick */}
                <input type="text" value={this.props.order} />
                <button onClick={this.props.handlePlus} className="plus">+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
        handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);