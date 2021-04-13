import React, { useState, useEffect } from "react";
import ArticleComponent from "../components/ArticleComponent";
import "../styles/Articles.scss";
import {connect} from 'react-redux';
import {GETUSERS, GETPOSTS} from '../store/actions'
import { NavLink } from "react-router-dom";

const ArticlesPage = (props) => {
  // const [posts, setPost] = useState([]);
  // const [users, setUsers] = useState([]);

  const fetchData = async (data) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/${data}`
    ).then((response) => response.json());
  };

  const deletePost = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(props.getPostsAction(props.posts.filter((item) => item.id !== id)));
  };

  const fetchUsersPost = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((p) => props.getPostsAction(p));
  };

  useEffect(() => {
    async function fetchElements() {
      // const users = await fetchData("users");
      const posts = await fetchData("posts");
      // props.getUsersAction(users)
      props.getPostsAction(posts)
    }
    if(props.posts.length) {
      console.log("Exista")
    } else {
        fetchElements();}
  }, []);

  const showPosts = () => {
    return props.posts.map((post) => {
      return (
        <div key={post.id} className="articlesElement">
          <NavLink to={`/articles/${post.id}`}>
            <ArticleComponent title={post.title} content={post.body} />
          </NavLink>
          <button onClick={() => deletePost(post.id)}> X </button>
        </div>
      );
    });
  };

  const uploadInfo = async () => {
    let oldPosts = props.posts;
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const newPost = oldPosts.push(json);
        console.log(oldPosts, "post");
        props.getPostsAction(oldPosts);
      });
  };

  const getUserButtons = () => {
    return props.users.map((user) => (
      <button
        key={user.id}
        onClick={() => fetchUsersPost(user.id)}
      >{`User ${user.id} posts`}</button>
    ));
  };

  console.log(props);
  return (
    <div className="articlesPageContainer">
      <div className="usersContainer">{getUserButtons()}</div>
      
      <div className="postsContainer">{showPosts()}</div>
      <button onClick={() => uploadInfo()}></button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    posts: state.posts
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsAction: (posts) => dispatch({type:GETPOSTS, posts: posts})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ArticlesPage);
