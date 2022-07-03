import {createSlice} from '@reduxjs/toolkit';
import {makeId} from "../../utils/makeId";

const canBeDividedByFour = num => Number.isInteger(num / 4)

const initialState = {
    counters: {
        'id1': {
            id: 'id1',
            value: 0,
            isSelfIncrementing: false
        }
    },
    lastId: 1,
    amount: 1,
    totalCount: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, {payload: id}) => {
            state.counters[id].value += 1;
            state.totalCount += 1
        },
        decrement: (state, {payload: id}) => {
            state.counters[id].value -= 1;
            state.totalCount -= 1
        },
        addCounter: (state) => {
            const id = makeId(state.lastId)
            state.counters[id] = {
                id,
                value: state.totalCount,
                isSelfIncrementing: canBeDividedByFour(state.amount + 1)
            }
            state.totalCount *= 2
            state.amount += 1
            state.lastId += 1
        },
        removeCounter: (state, {payload: id}) => {
            state.totalCount -= state.counters[id].value
            state.amount -= 1
            delete state.counters[id]
            Object.keys(state.counters).forEach((key, index) => {
                const currEl = state.counters[key]
                if (canBeDividedByFour(index + 1)) {
                    state.counters[key] = {...currEl, isSelfIncrementing: true}
                } else {
                    state.counters[key] = {...currEl, isSelfIncrementing: false}
                }
            })
        }
    }
});

export const {increment, decrement, addCounter, removeCounter} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
