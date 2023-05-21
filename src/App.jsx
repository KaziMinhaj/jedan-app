import { useEffect, useRef } from 'react';
// import './styles.css';
import * as joint from 'jointjs';

export default function App() {
  const holderRef = useRef(null);

  const renderShapes = () => {
    const el = holderRef.current;
    const namespace = joint.shapes;
    const graph = new joint.dia.Graph({}, { cellNamespace: namespace });
    const paper = new joint.dia.Paper({
      el: el,
      model: graph,
      width: 600,
      height: 300,
      gridSize: 10,
      drawGrid: true,
      background: {
        color: 'rgba(0, 255, 0, 0.3)',
      },
      cellViewNamespace: namespace,
    });

    paper.scale(1, 1);

    const rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(110, 50);
    rect.attr({
      body: {
        fill: 'blue',
      },
      label: {
        text: 'Hello',
        fill: 'white',
        fontSize: 25,
      },
    });
    rect.addTo(graph);

    var rect2 = new joint.shapes.standard.Rectangle();
    rect2.position(400, 30);
    rect2.resize(110, 50);
    rect2.attr({
      body: {
        fill: '#2C3E50',
        rx: 5,
        ry: 5,
        strokeWidth: 2,
      },
      label: {
        text: 'Zerodai',
        fill: '#FFFF',
        fontSize: 25,
      },
    });
    rect2.addTo(graph);

    var link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.attr({
      line: {
        stroke: 'blue',
        strokeWidth: 1,
        sourceMarker: {
          type: 'path',
          stroke: 'black',
          fill: 'red',
          d: 'M 10 -5 0 0 10 5 Z',
        },
        targetMarker: {
          type: 'path',
          stroke: 'black',
          fill: 'yellow',
          d: 'M 10 -5 0 0 10 5 Z',
        },
      },
    });
    link.labels([
      {
        attrs: {
          text: {
            text: 'Hello, World!',
          },
        },
      },
    ]);
    link.addTo(graph);
  };

  useEffect(() => {
    renderShapes();
  }, [holderRef]);
  return <div id="myholder" ref={holderRef}></div>;
}
