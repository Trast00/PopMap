import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countryReducer';

export default configureStore({
  reducer: {
    countryReducer,
  },
});
