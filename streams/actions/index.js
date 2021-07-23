import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_USERS,
  FETCH_QUOTE,
  DELETE_QUOTE,
  EDIT_QUOTE,
  CREATE_QUOTE,
  CREATE_TAB,
  FETCH_TABS,
  CREATE_QUESTION,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  console.log(formValues);
  const { userId } = getState().auth;
  // const userId = 2333;
  console.log({ ...formValues, userId });
  const response = await streams.post("/streams/", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const createTab = (formValues) => async (dispatch, getState) => {
  //console.log(formValues);
  const { userId } = getState().auth;
  // const userId = 2333;
  console.log({ ...formValues, userId });
  const response = await streams.post("/tabs/", { ...formValues, userId });
  dispatch({ type: CREATE_TAB, payload: response.data });
  history.push("/");
};

export const fetchTabs = () => {
  return async (dispatch) => {
    const response = await streams.get("/tabs");
    dispatch({ type: FETCH_TABS, payload: response.data });
  };
};

export const createQuestion = (formValues) => async (dispatch, getState) => {
  //console.log(formValues);
  const { userId } = getState().auth;
  // const userId = 2333;
  //console.log({ ...formValues, userId });
  const response = await streams.post("/questions/", { ...formValues, userId });
  dispatch({ type: CREATE_QUESTION, payload: response.data });
  history.push("/");
};

export const createQuote = (formValues) => async (dispatch, getState) => {
  console.log(formValues);
  const { userId } = getState().auth;
  // const userId = 2333;
  console.log("userid:" + userId);
  console.log({ ...formValues, userId });

  const path = `/users/${userId}/quotes/`;
  const response = await streams.post(`/users/`, {
    ...formValues,
    userId,
  });
  dispatch({ type: CREATE_QUOTE, payload: response.data });
  history.push("/");
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchUsers = (id) => {
  console.log(id);
  return async (dispatch) => {
    const response = await streams.get(`/users/${id}`);
    //console.log(response);
    dispatch({ type: FETCH_USERS, payload: response.data });
  };
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  console.log(formValues);
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  // dispatch({type:FETCH_STREAMS})
  history.push("/");
};

export const fetchQuote = (id) => async (dispatch) => {
  const response = await streams.get(`/users/${id}`);
  dispatch({ type: FETCH_QUOTE, payload: response.data });
};

export const editQuote = (userId, id, formValues) => async (dispatch) => {
  console.log(formValues);
  const response = await streams.patch(`/users/${userId}/quotes/`, formValues);
  dispatch({ type: EDIT_QUOTE, payload: response.data });
  history.push("/");
};

export const deleteQuote = (id) => async (dispatch) => {
  await streams.delete(`/users/${id}`);
  dispatch({ type: DELETE_QUOTE, payload: id });
  // dispatch({type:FETCH_STREAMS})
  history.push("/");
};
