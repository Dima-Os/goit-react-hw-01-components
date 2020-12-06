import PropTypes from 'prop-types';

import s from './StatsItem.module.css';

const StatsItem = ({
  Labeloption,
  quantity,
  labelClass = s.label,
  quantityClass = s.quantity,
  backgroundColor,
}) => {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <span className={labelClass}>{Labeloption}:</span>
      <span className={quantityClass}>{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  Labeloption: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string,
};

export default StatsItem;
