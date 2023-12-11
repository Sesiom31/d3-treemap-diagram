import PropTypes from 'prop-types';
import ContentMain from './ContentMain';

function Movies({ dataMovie }) {
  console.log(dataMovie)
  return (
    <>
      <ContentMain
        data={dataMovie}
        title={dataMovie.name}
        description={'Las 100 películas más taquilleras agrupadas por género'}
      />
    </>
  );
}

Movies.propTypes = {
  dataMovie: PropTypes.object.isRequired,
};

export default Movies;
