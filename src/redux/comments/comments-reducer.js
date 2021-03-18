import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchComments, addComment } from './comments-operations';

const itemsReducer = createReducer([], {
  [fetchComments.fulfilled]: (_, { payload }) => payload,
  [addComment.fulfilled]: (state, { payload }) => [...state, payload],
});

const loadingReducer = createReducer(false, {
  [fetchComments.pending]: () => true,
  [fetchComments.fulfilled]: () => false,
  [fetchComments.rejected]: () => false,

  [addComment.pending]: () => true,
  [addComment.fulfilled]: () => false,
  [addComment.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchComments.rejected]: (_, { payload }) => payload,
  [fetchComments.pending]: () => null,

  [addComment.rejected]: (_, { payload }) => payload,
  [addComment.pending]: () => null,
});

export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
