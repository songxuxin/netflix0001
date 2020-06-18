import React from 'react';
import './Button.css';
import { removeMovie, addMovie } from '../../redux/actions/index';
import { connect } from 'react-redux';


const Button = (props) => {

    const action = () => {
        if(props.name === 'Remove'){
            props.removeMovie(props.id);
        }
        if(props.name === 'Add'){
            props.addMovie(props.id);
        }
    }

    return (
        <button style={{backgroundColor: props.bgcolor}} className='btn' onClick={action} >{props.name}</button>
    )
}

export default connect(null, { removeMovie, addMovie} )(Button);