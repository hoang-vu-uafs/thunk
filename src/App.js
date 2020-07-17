import React from "react";

import { connect } from "react-redux";

import { getPosts } from "./actionCreator/action";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <button onClick={props.getPosts}>GET</button>

      {props.posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
