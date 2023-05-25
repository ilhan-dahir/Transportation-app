import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRides() {
    try {
        const response = yield axios.get('/api/rides');
        console.log('rides tables please', response.data);
        yield put({ type: 'SET_RIDES', payload: response.data });
    } catch (err) {
        console.log('error in fetchRides Saga', err);
    }
}


function* ridesSaga() {
    yield takeLatest('SAGA_FETCH_RIDES', fetchRides);
}

export default ridesSaga;