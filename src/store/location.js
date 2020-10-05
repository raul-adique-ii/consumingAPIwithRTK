import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'location',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    locsRequested: (state, action) => {
      state.loading = true;
    },

    locsRequestFailed: (state, action) => {
      state.loading = false;
    },

    locsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const { locsReceived, locsRequested, locsRequestFailed } = slice.actions;

export default slice.reducer;

// Action creators
const url = '/location';

export const loadLocations = () =>
  apiCallBegan({
    url,
    onSuccess: locsReceived.type,
    onStart: locsRequested.type,
    onError: locsRequestFailed.type,
  });
