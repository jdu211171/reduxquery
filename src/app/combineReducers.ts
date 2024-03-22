// src/app/rootReducer.ts

import {combineReducers} from '@reduxjs/toolkit';
import {counterSlice} from '../features/counter/counterSlice.ts';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export default rootReducer;
