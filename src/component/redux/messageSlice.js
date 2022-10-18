import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    messages: [],
    loading: false,
    hasErrors: false,
};

export const loadMessages = createAsyncThunk('messages/loadMessages', async () => axios
    .get('http://localhost:3000/messages')
    .then((response) => response.data));

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: {
        [loadMessages.pending]: (state) => {
            state.loading = true;
        },
        [loadMessages.fulfilled]: (state, { payload }) => {
            state.messages = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        [loadMessages.rejected]: (state) => {
            state.loading = false;
            state.hasErrors = true;
        }
    }
});

export default messagesSlice.reducer;