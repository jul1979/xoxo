
import PropTypes from 'prop-types';


export default function MyButton({ count, handleClick }) {
return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}
MyButton.propTypes = {
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}
