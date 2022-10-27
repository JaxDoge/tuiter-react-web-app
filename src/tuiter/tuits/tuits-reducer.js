import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "Elon Mask",
    "handle": "elonmask",
    "image": "elonmask.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
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
                ...templateTuit,
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