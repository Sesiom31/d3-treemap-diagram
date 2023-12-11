import PropTypes from 'prop-types';

function Tooltip({ dataTooltip: { name, category, value, x, y }, isActive }) {
  return (
    <div
      id="tooltip"
      data-value={value}
      style={{ transform: `translate(${x}px, ${y}px)`, display: isActive ? 'block' : 'none' }}
    >
      <span>Name: {name} </span>
      <span>Categoría: {category}</span>
      <span>Valor: {value} </span>
    </div>
  );
}

Tooltip.propTypes = {
  dataTooltip: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Tooltip;
