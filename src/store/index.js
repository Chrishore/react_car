import { carCreateSlice, setName, setCost } from "./slices/carCreateSlice";
import { carListSlice, addCar, removeCar, updateSearchTerm } from "./slices/carListSlice";
import { configureStore } from "@reduxjs/toolkit";
import { resetCarCreate } from './actions';

const store = configureStore({
    reducer: {
        carList: carListSlice.reducer,
        carCreate: carCreateSlice.reducer
    }
});


export { store, addCar, removeCar, setName, setCost, updateSearchTerm, resetCarCreate };