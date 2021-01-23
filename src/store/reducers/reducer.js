import * as actions from '../actions/actions';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            const currentCount = state.count;
            const updatedCount = currentCount + 1;
            return {
                ...state,
                count: updatedCount
            };
        case actions.DECREMENT:
            const currCount = state.count;
            const updateCount = currCount !== 0 ? currCount - 1 : 0;
            return {
                ...state,
                count: updateCount
            };
        default:
            return state;
    }

}

export default reducer;