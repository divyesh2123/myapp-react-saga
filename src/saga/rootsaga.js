import { all } from "redux-saga/effects";
import { watcherDec, watcherInc } from "./countersaga";

export default function* rootSaga()
{

    yield all([watcherInc(),watcherDec()])
}