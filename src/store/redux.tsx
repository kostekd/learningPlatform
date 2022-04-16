import { configureStore } from '@reduxjs/toolkit';
import authentication from './authentication';

const store = configureStore({
    reducer: { auth: authentication },
  });
  ;
  
  export default store;