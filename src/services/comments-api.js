import axios from 'axios';

const BASE_URL = 'https://app-guestbook-test.herokuapp.com';

export async function fetchComments() {
  const { data } = await axios.get(`${BASE_URL}/api/comments`);
  return data.data.comments;
}

export async function addComment(comment) {
  const { data } = await axios.post(`${BASE_URL}/api/comments`, comment);
  return data.data.comment;
}

const commentApi = { fetchComments, addComment };

export default commentApi;
