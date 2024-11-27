import { configureStore } from '@reduxjs/toolkit';
import baublesReducer from '../store/reducers/GeneralReducer';

const store = configureStore({
    reducer: {
        baubles: baublesReducer,
    },
});

export default store;