import P from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  text: '',
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func,
  disabled: P.bool,
};
