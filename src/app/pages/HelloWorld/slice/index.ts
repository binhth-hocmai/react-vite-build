import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { blockSaga } from './saga';

import { BlockItem, BlockState } from './types';

export const initialState: BlockState = {
  blockItem: [],
};

const slice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    getBlocks: {
      reducer(state) {
        return state;
      },
      prepare(params?: null, meta?: (error: any) => void) {
        return { payload: params, meta };
      },
    },
    getBlockSuccess(state, action: PayloadAction<BlockItem[]>) {
      state.blockItem = action.payload;
    },
  },
});

export const { actions: blockActions } = slice;

export const UseBlockSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: blockSaga });
  return { actions: slice.actions };
};
