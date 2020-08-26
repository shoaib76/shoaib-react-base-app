const initSstate = {
    counter: 0,
};

export default function CounterReduser(state = initSstate, action) {

    switch(action.type) {
        case 'INC':
            return {...state, counter: state.counter + 1 };
        case 'DEC':
            return {...state, counter: state.counter - 1 };
        default:
            return state;      
    }
}