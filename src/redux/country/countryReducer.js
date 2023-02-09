import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import worldSvg from '../../assets/world.svg';
import asiaSvg from '../../assets/asia.svg';
import africaSvg from '../../assets/africa.svg';
import europeSvg from '../../assets/europe.svg';
import americasSvg from '../../assets/america.svg';
import oceaniaSvg from '../../assets/oceania.svg';

export const listContinents = [
  {
    name: 'World',
    population: 0,
    flags: {
      svg: worldSvg,
    },
  },
  {
    name: 'Africa',
    population: 0,
    flags: {
      svg: africaSvg,
    },
  },
  {
    name: 'Americas',
    population: 0,
    flags: {
      svg: americasSvg,
    },
  },
  {
    name: 'Asia',
    population: 0,
    flags: {
      svg: asiaSvg,
    },
  },
  {
    name: 'Europe',
    population: 0,
    flags: {
      svg: europeSvg,
    },
  },
  {
    name: 'Oceania',
    population: 0,
    flags: {
      svg: oceaniaSvg,
    },
  },
  {
    name: 'Rest of World',
    population: 0,
    flags: {
      svg: worldSvg,
    },
  },
];

export const fetchData = createAsyncThunk(
  'popmap/country/GET_DATA',
  async () => {
    const result = await fetch('https://restcountries.com/v2/all');
    const data = await result.json();

    if (listContinents[0].population === 0) {
      data.forEach((country) => {
        listContinents[0].population += country.population;
        switch (country.region) {
          case 'Africa': {
            listContinents[1].population += country.population;
            break;
          }
          case 'Americas': {
            listContinents[2].population += country.population;
            break;
          }
          case 'Asia': {
            listContinents[3].population += country.population;
            break;
          }
          case 'Europe': {
            listContinents[4].population += country.population;
            break;
          }
          case 'Oceania': {
            listContinents[5].population += country.population;
            break;
          }
          default: {
            listContinents[6].population += country.population;
            break;
          }
        }
      });
    }

    return data;
  },
);

const countryReducer = createSlice({
  name: 'popmap/country/',
  initialState: {
    indexCurrentContinents: 0,
  },
  reducers: {
    updateCurrentContinentIndex: (state, action) => (
      { ...state, indexCurrentContinents: action.payload }
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled,
      (state, { payload }) => ({ ...state, listCountries: [...payload] }));
  },
});

export const { updateCurrentContinentIndex } = countryReducer.actions;
export default countryReducer.reducer;
