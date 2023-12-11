import PropTypes from 'prop-types';
import ContentMain from './ContentMain';

function VideoGames({ dataVideo }) {
  return (
    <>
      <ContentMain
        data={dataVideo}
        title={dataVideo.name}
        description={'Top 100 de los videojuegos más vendidos agrupados por plataforma'}
      />
    </>
  );
}

VideoGames.propTypes = {
  dataVideo: PropTypes.object.isRequired,
};

export default VideoGames;
