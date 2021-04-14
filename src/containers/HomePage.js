import React, { useEffect } from "react";
import {connect} from 'react-redux';
import {GETUSERS} from '../store/actions'

const HomePage = (props) =>{
    
    const fetchData = async (data) => {
        return fetch(
          `https://jsonplaceholder.typicode.com/${data}`
        ).then((response) => response.json());
      };

    useEffect(() => {
        async function fetchUsers() {
            const users = await fetchData('users')
            props.getUsersAction(users)
        }
        fetchUsers()
    }, [])


    return (
        <main>My Home Page</main>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getUsersAction: (users) => dispatch({type:GETUSERS, users: users})
    }
  }
export default  connect(mapStateToProps, mapDispatchToProps) (HomePage);
