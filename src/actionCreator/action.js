import axios from "axios";

export const getPosts = () => {
  return async function (dispatch) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(response);

    dispatch({
      type: "GET_POSTS",
      payload: response.data,
    });
  };
};
