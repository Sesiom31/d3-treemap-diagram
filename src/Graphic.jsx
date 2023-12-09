import { useEffect } from "react"
import * as d3 from 'd3'
import Header from "./Header";

const [url1, url2, url3] = [
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json',
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json',
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json',
]; 
function Graphic() {
  useEffect(() => {
    const fetchData = async () => {
    try {
      const [data1, data2, data3]= await Promise.all([d3.json(url1), d3.json(url2), d3.json(url3)])

      console.log(data1)
      console.log(data2)
      console.log(data3);

    } catch (err) {
      console.log(err)
    }
  }

    fetchData()
},[])


  return (
    <>
      <Header />
    </>
  )
}

export default Graphic