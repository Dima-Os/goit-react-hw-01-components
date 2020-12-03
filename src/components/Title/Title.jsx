import PropTypes from 'prop-types';
import s from './Title.module.css';
const Title = ({ titleDescription }) => {
  return <h2 className={s.title}>{titleDescription}</h2>;
};

Title.propTypes = {
  titleDescription: PropTypes.string.isRequired,
};

export default Title;
