import React from 'react';
import './List.css';
import MovieList from '../MovieList/MovieList';


const MyList = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <div className='mylist'>
                {props.list?.map((item, index) => {
                    return <MovieList key={index} movie={item} action={props.action} />
                })}
            </div>
        </div>
    )
}

export default MyList;