export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_ITEM = 'REMOVE_FEATURE';

export const buyItem = item => {
  return {
    type: BUY_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};
