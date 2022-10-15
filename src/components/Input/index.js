/* eslint-disable no-unneeded-ternary */
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

/*
  Dans un destructuring ou dans les paramètres d'une fonction
  on peut utiliser le rest parameter qui va récupérer toutes les valeurs pas encore récupérée
  dans un tableau, sauf pour du destructuring d'objet ce sera dans un objet
*/
function Input({ name, ...props }) {
  // pour accéder dynamiquement à une propriété d'un objet
  // on utilise la syntaxe crocher obj['prop'] plutôt que la syntaxe point ob.prop
  const value = useSelector((state) => state[name]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: event.target.value,
      key: name,
    });
  };
  return (
    <input
      name={name}
      value={value ? value : ''}
      onChange={handleChange}
      {...props} // j'utilise le spread operator pour déverser le reste des props sur mon input
    />
  );
}

// je rend l'info name obligatoire
// elle me servira de critère pour savoir quelle info récupérer dans le state
Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
