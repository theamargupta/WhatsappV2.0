export const intialState = {
  user: null,
};

export const actionTypes = {
  set="SET_USER"
};
export const actionGenrator = (payload) => ({
  actionTypes,
  payload,
});
const reducer = (state,action)=>{
    console.log(action)
    const {type,payload}=action
    switch (type) {
        case type:
        return {...state,user:payload}
        default:
            return state;
    }
}