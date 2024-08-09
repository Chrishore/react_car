import { createSlice } from "@reduxjs/toolkit";
import { resetCarCreate } from "../actions";
const carCreateSlice = createSlice({
    name: "carCreate",
    initialState: {
        name: "",
        cost: 0
    },
    reducers: {
        setName: (state, action) => {
            console.log("setName called with payload: ", action.payload);
            state.name = action.payload;
        },
        setCost: (state, action) => {
            console.log("setCost called with payload: ", action.payload);
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(resetCarCreate,(state, action) => {
            console.log("resetCarCreate called");
            state.name = "";
            state.cost = 0;
        })
    }
});

export const { setName, setCost } = carCreateSlice.actions;
export { carCreateSlice };