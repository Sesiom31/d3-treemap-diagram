import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { wMain, hMain, wLegend, hLegend } from './data';
import { useEffect, useRef, useState } from 'react';
import Tooltip from './Tooltip';

function Kickstarter({ data, title, description }) {
  const [tooltipIsActive, setTooltipIsActive] = useState(false);
  const [dataTooltip, setDataTooltip] = useState({
    x: 0,
    y: 0,
    name: '',
    category: '',
    value: 0,
  });
  const svgMainRef = useRef(null);
  const svgLegendRef = useRef(null);

  const root = d3.hierarchy(data).sum((d) => d.value);

  let colorScale;
  if (Object.keys(data).length > 0) {
    colorScale = d3
      .scaleOrdinal()
      .domain(data.children.map((c) => c.name))
      .range(d3.schemePaired.concat(d3.schemeDark2).concat(d3.schemeCategory10))
      .unknown('transparente');
  }

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const treemap = d3.treemap().size([wMain, hMain]);
      treemap(root);

      let branch = d3
        .select(svgMainRef.current)
        .selectAll('g')
        .data(root.descendants())
        .enter()
        .append('g')
        .attr('transform', (d) => `translate(${d.x0}, ${d.y0})`)
        .style('cursor', 'pointer')
        .on('mouseenter', (e, d) => {
          setTooltipIsActive(true);
          setDataTooltip({
            name: d.data.name,
            category: d.data.category,
            value: d.data.value,
            x: e.pageX - 100,
            y: e.pageY - 250,
          });
        })
        .on('mousemove', (e) => {
          setDataTooltip((prevState) => ({ ...prevState, x: e.pageX - 100, y: e.pageY - 250 }));
        })
        .on('mouseleave', () => {
          setTooltipIsActive(false);
        });

      branch
        .append('rect')
        .attr('class', 'tile')
        .attr('data-name', (d) => d.data.name)
        .attr('data-category', (d) => d.data.category)
        .attr('data-value', (d) => d.data.value)
        .attr('width', (d) => d.x1 - d.x0)
        .attr('height', (d) => d.y1 - d.y0)
        .attr('fill', (d) => colorScale(d.data.category))
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5);

      branch
        .append('text')
        .selectAll('tspan')
        .data((d) => d.data.name.split(' '))
        .enter()
        .append('tspan')
        .attr('x', 4)
        .attr('y', (d, i) => 13 + i * 10)
        .text((d) => d);
    }
  }, [data, colorScale, root]);

  // Legend
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      d3.select(svgLegendRef.current)
        .selectAll('rect')
        .data(colorScale.domain())
        .enter()
        .append('rect')
        .attr('class', 'legend-item')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', (d, i) => {
          if (i < 8) return 55;
          if (i < 16) return 255;
          if (i < 24) return 455;
        })
        .attr('y', (d, i) => (i % 8) * 30 + 10)
        .attr('fill', (d) => colorScale(d))
        .text('hola');

      d3.select(svgLegendRef.current)
        .selectAll('text')
        .data(colorScale.domain())
        .enter()
        .append('text')
        .attr('x', (d, i) => {
          if (i < 8) return 85;
          if (i < 16) return 285;
          if (i < 24) return 485;
        })
        .attr('y', (d, i) => (i % 8) * 30 + 25)
        .text((d) => d);
    }
  }, [root, colorScale, data]);

  return (
    <div className="container-main">
      <h1 id="title">{title}</h1>
      <span id="decription">{description}</span>
      <svg ref={svgMainRef} width={wMain} height={hMain}></svg>
      <svg id="legend" ref={svgLegendRef} width={wLegend} height={hLegend}></svg>

      {tooltipIsActive && <Tooltip dataTooltip={dataTooltip} isActive={tooltipIsActive} />}
    </div>
  );
}

Kickstarter.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Kickstarter;
