const StatsItem = ({ Labeloption, quantity }) => {
  return (
    <li>
      <span className="label">{Labeloption}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};
export default StatsItem;
