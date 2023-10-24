import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UseBlockSlice } from './slice';

import { bloctSelector } from './slice/selector';

interface Props {}

const HelloWorld = (props: Props) => {
  const dispatch = useDispatch();
  const blocks = useSelector(bloctSelector);
  const { actions } = UseBlockSlice();

  useEffect(() => {
    dispatch(actions.getBlocks());
  }, []);

  useEffect(() => {
    console.log('blocks: ', blocks);
    debugger;
    
  }, [blocks])

  return (
    <h1>Hello</h1>
  )
}

export default HelloWorld;