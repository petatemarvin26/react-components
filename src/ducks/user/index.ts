const initState = {
  firstname: '',
};

const user = (
  state = initState,
  action: {type: 'SET'; payload: {firstname: string}}
) => {
  switch (action.type) {
    case 'SET': {
      const firstname = action.payload.firstname;
      return {
        firstname: firstname ? firstname : state.firstname,
      };
    }

    default:
      return state;
  }
};

export {initState as userInitState};
export default user;
