const initState = { firstName: '', lastName: '' };

export default (state = initState, action) => {
  switch (action.type) {
    case 'yourName':
      return { ...state, ...action.data };
    default: return state;
  }
};
