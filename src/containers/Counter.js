import React, { useState } from 'react';
import {connect} from 'react-redux';
import {INCREMENT, DECREMENT} from '../store/actions'

export const Counter = (props) => {

    return(
        <div>
            <div>Counter is {props.ctr}</div>
            <button onClick= {props.onIncrementCounter}>+</button>
            <button onClick= {props.onDecrementCounter}>-5</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter : () => dispatch({type: INCREMENT}),
        onDecrementCounter : () => dispatch({type: DECREMENT, value : 5})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Counter);