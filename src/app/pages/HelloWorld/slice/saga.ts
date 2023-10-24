import { getBlocks } from 'app/service/blockService';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { BlockItem } from './types';

import { blockActions as actions } from './index';

function* getBlockData() {
  try {
    const response: BlockItem[] = yield call(getBlocks);
    yield put(actions.getBlockSuccess(response));
  } catch (error: any) {}
}

export function* blockSaga() {
  yield takeEvery(actions.getBlocks.type, getBlockData);
}
