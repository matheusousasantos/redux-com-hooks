import { createStore } from 'redux';

const INITIAL_STATE = {

    data: [
        'React Native',
        'ReactJS',
        'Java'
    ],

};

function courses(state = INITIAL_STATE, action) {

    switch(action.type) {
        case 'ADD_COURSE':
//          Pega a lista já existente e adiciona um novo title.
            return { ...state,  data: [...state.data, action.title ]}
        default:
            return state;
    }

}

const store = createStore(courses);

export default store;