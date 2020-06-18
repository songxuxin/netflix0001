import React from 'react';
import logo from './NETFLIX.svg';
import './App.css';

import { connect } from 'react-redux';
import Footer from './components/Footer/Footer';

import UserMovieList from './components/UserMovieList/index';

function App(props) {
  return (
    <div className='container'>
        <img src={logo} style={{ width: '154px', height: '77px' }} alt='logo'/>
        <UserMovieList />
        <Footer title={'My List'} mylist={props.lists.mylist}/> 
    </div>
  );
}

const mapStateToProps = state => {
  return {
      lists: state.listReducer.data,
      isLoading: state.listReducer.isLoading
  }
}


export default connect(mapStateToProps, null)(App);
