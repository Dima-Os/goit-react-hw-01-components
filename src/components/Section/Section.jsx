import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Section;