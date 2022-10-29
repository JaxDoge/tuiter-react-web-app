import {createSlice} from "@reduxjs/toolkit";

const profile = {
    name: 'Jose Annunziato',
    handle: 'jannunzi',
    profilePicture: 'nerdAvatar.jpg',
    bannerPicture: 'webDevelopBanner.jfif',
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '1968-07-07',
    dateJoined: '2009-04',
    followingCount: 340,
    followersCount: 223
}


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state = {
                ...state,
                ...action.payload
            }
            return state
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;



