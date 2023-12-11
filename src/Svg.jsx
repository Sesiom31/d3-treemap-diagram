import PropTypes from 'prop-types';
import Kickstarter from './Kickstarter';
import Movies from './Movies';
import VideoGames from './VideoGames';

function Svg({ dataKick, dataMovie, dataVideo, activeTab }) {
  

  const renderTabcontent = () => {
    switch (activeTab) {
      case 1:
        return <Kickstarter dataKick={dataKick} />;
      case 2:
        return <Movies dataMovie={dataMovie} />;
      case 3:
        return <VideoGames dataVideo={dataVideo} />;

      default:
        return null;
    }
  };
  return <main>
    {renderTabcontent()}
  </main>;
}

Svg.propTypes = {
  dataKick: PropTypes.object.isRequired,
  dataMovie: PropTypes.object.isRequired,
  dataVideo: PropTypes.object.isRequired,
  activeTab: PropTypes.number.isRequired
};

export default Svg;
