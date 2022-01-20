import { createStore } from redux;

const progressReducer = (state = { counter: 0 },action) => {
    if(action === 'next') {
        return {
            formStep: state.formStep + 1
        }
    }

    return state;
};

const store = createStore(progressReducer);

export default store;