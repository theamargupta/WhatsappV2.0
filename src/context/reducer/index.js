export const intialState = {
  user: null,
};

export const actionTypes = {
  set: 'SET_USER',
};
export const actionGenrator = (payload) => ({
  type: actionTypes.set,
  payload,
});
const reducer = (state, action) => {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case actionTypes.set:
      return { ...state, user: payload };
    default:
      return state;
  }
};
export default reducer;
