// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { BlockState } from 'app/pages/HelloWorld/slice/types';

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  blocks: BlockState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
