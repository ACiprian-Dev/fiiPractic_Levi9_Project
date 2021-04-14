import { reducer } from "../store/reducer"
import * as actionTypes from '../store/actions'

const mockState = {
    counter: 0,
    users: [],
    posts: [],
}

describe('test reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            counter : 0,
            users : [],
            posts : [],
        })
    });
    it('should increase counter', () => {
        expect(reducer(mockState, {type: actionTypes.INCREMENT}))
        .toEqual({
            counter : 1,
            users : [],
            posts : [],
        }, )
    });
    it('should decrease counter', () => {
        expect(reducer(mockState, {type: actionTypes.DECREMENT,value:1})).toEqual({
            counter : -1,
            users : [],
            posts : [],
        })
    })
})