import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="What are you looking for?"
    />
  );
};

TextInput.defaultProps = {
  searchValue: '',
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
