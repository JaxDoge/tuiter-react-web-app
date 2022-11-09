import { createSlice } from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },



    },

    reducers: {
        likeTuitterToggle(state, action) {
            const targetTuiter = state.find((tuiter) =>
                tuiter._id === action.payload._id)
            targetTuiter.liked ?
                targetTuiter.likes -= 1 : targetTuiter.likes += 1;
            targetTuiter.liked = !targetTuiter.liked;
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                _id: (new Date()).getTime(),
            });
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

    }
});

export const {likeTuitterToggle, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;