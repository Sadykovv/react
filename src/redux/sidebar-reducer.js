import { getDefaultNormalizer } from "@testing-library/react";

let initialState = {
    friends: [
        { id: '1', name: 'Alisher', },
        { id: '2', name: 'Inna' },
        { id: '3', name: 'Danil' },
    ]
}

const sidebarReducer = (state=initialState,action) =>{
    return state;
}

export default sidebarReducer