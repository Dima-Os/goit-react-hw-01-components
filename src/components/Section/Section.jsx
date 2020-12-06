import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
};
export default Section;
