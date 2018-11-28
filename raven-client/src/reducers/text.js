const text = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TEXT':
      return [
        ...state,
        action.text
      ];
    default:
      return state;
  }
}

export default text;