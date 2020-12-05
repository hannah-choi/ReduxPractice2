import { createStore } from "redux";
import { createAction } from "redux-actions";

const ADD_PERSON = "ADD_PERSON";
const DELETE_PERSON = "DELETE_PERSON";
const DELETE_ALL = "DELETE_ALL";

//타입을 리턴해주는 함수

export const addPerson = createAction(ADD_PERSON);
export const deletePerson = createAction(DELETE_PERSON);
export const deleteAll = createAction(DELETE_ALL);

// export const addPerson = name => ({ type: ADD_PERSON, name: name });
// export const deletePerson = index => ({ type: DELETE_PERSON, index: index });
// export const deleteAll = index => ({ type: DELETE_ALL });

const initState = {
    guests: ["사람1", "사람2"],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                guests: [...state.guests, action.payload],
            };
        case DELETE_PERSON:
            let newArray = Array.from(state.guests);
            newArray.splice(action.payload, 1);
            return {
                guests: newArray,
            };
        case DELETE_ALL:
            let empty = [];
            return {
                guests: empty,
            };
        default:
            return state;
    }
};

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
