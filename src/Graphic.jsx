import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import Header from './Header';
import { urlKick, urlVideo, urlMovie } from './data';
import Svg from './Svg';

function Graphic() {
  const [dataKick, setDataKick] = useState({});
  const [dataMovie, setDataMovie] = useState({});
  const [dataVideo, setDataVideo] = useState({});
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const [data1, data2, data3] = await Promise.all([
          d3.json(urlKick),
          d3.json(urlMovie),
          d3.json(urlVideo),
        ]);
        setDataKick(data1);
        setDataMovie(data2);
        setDataVideo(data3);

       /*  console.log(data1);
        console.log(data2);
        console.log(data3); */
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header setActiveTab={setActiveTab} />
      <Svg dataKick={dataKick} dataMovie={dataMovie} dataVideo={dataVideo} activeTab={activeTab} />
    </>
  );
}

export default Graphic;
