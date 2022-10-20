import data from '../data/books.json'

const initialState = {
 books: data,
};

function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'INSTRUCTION':
      return {
        ...state, // déverse le contenue du state
        // le ou les state qui change
      };
    default:
      return state;
  }
}

export default booksReducer;