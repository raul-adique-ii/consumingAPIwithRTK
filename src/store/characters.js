import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    charsRequested: (state, action) => {
      state.loading = true;
    },

    charsRequestFailed: (state, action) => {
      state.loading = false;
    },

    charsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const {
  charsReceived,
  charsRequested,
  charsRequestFailed,
} = slice.actions;

export default slice.reducer;

// Action creators
const url = '/character';

export const loadCharacters = () =>
  apiCallBegan({
    url,
    onSuccess: charsReceived.type,
    onStart: charsRequested.type,
    onError: charsRequestFailed.type,
  });
