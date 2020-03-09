import reducer from './reqToServer'
import * as actionTypes from '../actions/actionTypes'

describe('reqToServer reducer', () => {
    it('should return the initialState', () => {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            error: false
        });
    });
    it('Start', () => {
        expect(reducer(undefined, { type: actionTypes.REQ_TO_SERVER_START })).toEqual({
            loading: true,
            error: false
        });
    });
    it('Success', () => {
        expect(reducer(undefined, { type: actionTypes.REQ_TO_SERVER_SUCCESS })).toEqual({
            loading: false,
            error: false
        });
    });
    it('Fail', () => {
        expect(reducer(undefined, { type: actionTypes.REQ_TO_SERVER_FAIL, error: "some error" })).toEqual({
            loading: false,
            error: "some error"
        });
    });
});