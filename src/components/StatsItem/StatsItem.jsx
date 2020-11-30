const StatsItem = ({ Labelaption, quantity }) => {
  return (
    <li>
      <span className="label">{Labelaption}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};
export default StatsItem;
