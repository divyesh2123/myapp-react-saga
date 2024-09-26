import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { DEC, INC } from '../action/counterAction';

//button->saga action call
//3 times click
// if first action is still pedning
//

function* asnycDec()
{
    yield delay(2000);
    yield put(DEC())
}

export function* watcherDec()
{
    yield takeLatest('Asyc_Dec',asnycDec)
}


function* asnycInc()
{
    yield delay(2000);
    yield put(INC())
}

export function* watcherInc()
{
    yield takeEvery('Asyc_INC',asnycInc)
}