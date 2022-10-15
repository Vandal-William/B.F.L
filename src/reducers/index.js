const initialState = {

};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_VALUE': // pour ajouter un champ controller
      return {
        ...state,
        [action.key]: action.value,
        // la notation entre crochet me permet de spécifier
        // via une expression le nom de la propriété cliblée
      };
    case 'INSTRUCTION':
      return {
        ...state, // déverse le contenue du state
        // le ou les state qui change
      };
    default:
      return state;
  }
}

export default reducer;
