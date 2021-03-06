import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { getPrice } from "./wallet/action";
function* GetNearPrice() {
    let result = yield axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    // console.log(result.data);
    let nearFound = result.data.find((el) => el.id === "near");
    // console.log(nearFound);
    yield put (getPrice(nearFound.current_price))
}
function* Login(){
    
}

export function* rootSaga() {
    yield takeEvery('login',Login)
    yield takeEvery("price", GetNearPrice)
}
