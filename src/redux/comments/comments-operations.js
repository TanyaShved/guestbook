import { createAsyncThunk } from '@reduxjs/toolkit';
import commentApi from '../../services/comments-api';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (_, { rejectWithValue }) => {
    try {
      const comments = await commentApi.fetchComments();
      return comments;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (comment, { rejectWithValue }) => {
    try {
      return await commentApi.addComment(comment);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
