import { RootState } from 'app/types/RootState';

export const bloctSelector = (root: RootState) => {
  return root?.blocks;
};
