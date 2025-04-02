import { configureStore } from '@reduxjs/toolkit';
import baublesReducer from '../store/reducers/GeneralReducer';

const store = configureStore({
    reducer: {
        baubles: baublesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;