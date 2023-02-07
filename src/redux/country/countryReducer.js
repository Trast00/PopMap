import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk(
  "popmap/country/GET_DATA", 
  async () => {
    const result = await fetch("https://restcountries.com/v2/all")
    const data = await result.json()

    console.log(data)
    return data
  }
)

const countryReducer = createSlice({
  name:"popmap/country/",
  initialState: [],
  reducers: {},
  extraReducers :(builder) => {
    builder.addCase(fetchData.fulfilled, 
      (state, {payload}) => ({...state, listCountries:[...payload]}))
  }
})

export default countryReducer.reducer;