import PropTypes from 'prop-types';
import ContentMain from './ContentMain'

function Kickstarter({ dataKick }) {  
  return (
    <>
      <ContentMain
        data={dataKick}
        title={dataKick.name}
        description={'Las 100 campañas de Kickstarter más comprometidas agrupadas por categoría'}
      />
    </>
  );
}

Kickstarter.propTypes = {
  dataKick: PropTypes.object.isRequired,
};

export default Kickstarter;
