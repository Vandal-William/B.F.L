const debug = (store) => (next) => (action) => {
  // un middleware voit passer l'action
  console.log(action);
  // et doit la laisser passer pour qu'elle continue cours au middleware/reducer suivant
  next(action);
};

export default debug;
