import { createSlice, nanoid } from "@reduxjs/toolkit";

const carListSlice = createSlice({
    name: "carList",
    initialState: {
        searchTerm: "",
        displayList: [],
    },
    reducers: {
        addCar: (state, action) => {
            const newCar = {
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            }
            console.log("Adding car: ", newCar);
            state.displayList.push(newCar);
        },
        removeCar: (state, action) => {
            state.displayList = state.displayList.filter(car => car.id !== action.payload);
        },
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }

});

export const { addCar, removeCar, updateSearchTerm } = carListSlice.actions;
export { carListSlice }