import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import messagesSlice from './messageSlice';

const logger = createLogger()

const store = configureStore({
    reducer: {
        messages: messagesSlice,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
