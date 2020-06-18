import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLists } from '../../redux/actions/index';
import List from '../List/List';

const UserMovieList = props => {

    useEffect(() => {
        props.getLists();
    }, []);

    const { lists } = props;

    return (
        <div>
            <List title={'My List'} list={lists.mylist} action={'Remove'} />
            <List title={'Recommendations'} list={lists.recommendations} action={'Add'} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        lists: state.listReducer.data,
        isLoading: state.listReducer.isLoading
    }
}

export default connect(mapStateToProps, { getLists })(UserMovieList);