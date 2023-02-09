import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import worldSvg from '../../assets/world.svg';

export const listContinents = [
  {
    name: "World",
    population: 0,
    flags: {
      svg: worldSvg,
    },
  },
  {
    name: "Africa",
    population: 0,
    flags: {
      svg: "",
    },
  },
  {
    name: "Americas",
    population: 0,
    flags: {
      svg: "",
    },
  },
  {
    name: "Asia",
    population: 0,
    flags: {
      svg: "",
    },
  },
  {
    name: "Europe",
    population: 0,
    flags: {
      svg: "",
    },
  },
  {
    name: "Oceania",
    population: 0,
    flags: {
      svg: "",
    },
  },
  {
    name: "Rest of World",
    population: 0,
    flags: {
      svg: "",
    },
  },
]

export const fetchData = createAsyncThunk(
  'popmap/country/GET_DATA',
  async () => {
    const result = await fetch('https://restcountries.com/v2/all');
    const data = await result.json();
    
    data.forEach(country => {
      listContinents[0].population += country.population
      switch(country.region){
        case "Africa": {
          listContinents[1].population += country.population
          break;
        }
        case "Americas": {
          listContinents[2].population += country.population
          break;
        }
        case "Asia": {
          listContinents[3].population += country.population
          break;
        }
        case "Europe": {
          listContinents[4].population += country.population
          break;
        }
        case "Oceania": {
          listContinents[5].population += country.population
          break;
        }
        default: {
          listContinents[6].population += country.population
          break;
        }
      }
    });

    return data;
  },
);

const countryReducer = createSlice({
  name: 'popmap/country/',
  initialState: {
    indexCurrentContinents: -1
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled,
      (state, { payload }) => ({ ...state, listCountries: [...payload] }));
  },
});


export default countryReducer.reducer;
