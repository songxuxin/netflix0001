import React, { useState } from 'react';
import './MovieList.css';
import Button from '../Button/Button';

const MovieList = (props) => {

    const [display, setDisplay] = useState(false);

    let buttonColor = null;

    if (props.action === 'Add') {
        buttonColor = 'rgb(236,55,44)';
    } else {
        buttonColor = 'rgb(29,187,145)';
    }

    const { movie } = props;
    return (
        <div>
            {!movie ? null : (<div key={props.movie.id} className="img-container">
                <div>{props.movie.title}</div>
                <div onMouseEnter={() => setDisplay(true)}
                    onMouseLeave={() => setDisplay(false)} >
                    <img src={props.movie.img} alt={props.movie.title} />
                    {display ? <Button id={props.movie.id} name={props.action} bgcolor={buttonColor} /> : ''}
                </div>
            </div>)}
        </div>
    )

}

export default MovieList;