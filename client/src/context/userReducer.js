const userReducer = (state = null, actions) => {
  switch (actions.type) {
    case "GET_USER":
      return state;
    case "SET_USER":
      return actions.user;
    case "SET_USER_NULL":
      return actions.user;
    default:
      return state;
  }
};

export default userReducer;
