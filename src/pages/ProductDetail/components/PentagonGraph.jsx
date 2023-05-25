import React, { useState } from 'react';
import styled from 'styled-components';
import { fontMix } from '../../../styles/mixin';
import theme from '../../../styles/theme';

const PentagonGraph = ({
  graphSize,
  avg_view,
  avg_safety,
  avg_cost,
  avg_clean,
  avg_convenience,
}) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    opacity: 0.6,
  });

  const grades = { avg_view, avg_safety, avg_cost, avg_clean, avg_convenience };
  const maxRating = 5;

  const svgSize = 150;
  const textDistance = 20;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const angleStep = (Math.PI * 2) / Object.values(grades).length;
  const angles = Object.values(grades).map(
    (d, i) => angleStep * i - Math.PI / 2
  );

  const calculatePoint = (d, i) => {
    const radius = (d / maxRating) * (graphSize / 2);
    const x = Math.cos(angles[i]) * radius + centerX;
    const y = Math.sin(angles[i]) * radius + centerY;
    return { x, y };
  };

  const points = Object.values(grades).map(calculatePoint);

  const calculateMaxPoint = (d, i) => {
    const radius = graphSize / 2;
    const x = Math.cos(angles[i]) * radius + centerX;
    const y = Math.sin(angles[i]) * radius + centerY;
    return { x, y };
  };

  const maxPoints = Object.values(grades).map(calculateMaxPoint);

  const labels = ['경관', '안전함', '가성비', '청결도', '편리함'];

  const calculateLabelPoint = (p, i) => {
    const x =
      p.x + Math.cos(angles[i]) * (i === 1 || i === 4 ? textDistance : 0);
    const y =
      p.y + Math.sin(angles[i]) * (i === 1 || i === 4 ? textDistance : 0);
    return { x, y };
  };

  const labelPoints = maxPoints.map(calculateLabelPoint);

  return (
    <Container>
      <Graph
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        preserveAspectRatio="xMidYMid meet"
        svgSize={svgSize}
      >
        <polygon
          points={maxPoints.map(p => `${p.x},${p.y}`).join(' ')}
          fill="#eee"
          stroke="#000"
        />
        {maxPoints.map((p, i) => (
          <line
            x1={centerX}
            y1={centerY}
            x2={p.x}
            y2={p.y}
            stroke="#B0B0B0"
            key={i}
          />
        ))}
        {[1, 2, 3, 4].map(score => {
          const scorePoints = Object.values(grades).map((d, i) => {
            const radius = (score / maxRating) * (graphSize / 2);
            const x = Math.cos(angles[i]) * radius + centerX;
            const y = Math.sin(angles[i]) * radius + centerY;
            return { x, y };
          });

          return (
            <polygon
              points={scorePoints.map(p => `${p.x},${p.y}`).join(' ')}
              fill="transparent"
              stroke="#B0B0B0"
              strokeDasharray="10 0"
              key={score}
            />
          );
        })}
        <polygon
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
          fill="#f9dd4a"
          stroke="orange"
          opacity={tooltip.opacity}
          onMouseEnter={() =>
            setTooltip({
              visible: true,
              opacity: 0.9,
            })
          }
          onMouseLeave={() => setTooltip({ visible: false, opacity: 0.6 })}
        />
        {points.map((p, i) => (
          <circle cx={p.x} cy={p.y} r={2} fill="red" key={i} />
        ))}
        {tooltip.visible &&
          points.map((p, i) => (
            <text
              x={p.x}
              y={i === 0 ? p.y + 15 : p.y - 10} // 경관 포인트만 아래로 내리고 나머지는 그대로 유지
              textAnchor="middle"
              fill="black"
              key={i}
              style={{
                fontSize: '10px',
                backgroundColor: 'white',
                padding: '5px',
              }}
              onMouseEnter={() =>
                setTooltip({
                  visible: true,
                  opacity: 0.9,
                })
              }
              onMouseLeave={() => setTooltip({ visible: false, opacity: 0.6 })}
            >
              {parseFloat(Object.values(grades)[i]).toFixed(1)}
            </text>
          ))}

        {labelPoints.map((p, i) => {
          let dyValue;
          switch (i) {
            case 0:
              dyValue = -10; // 경관
              break;
            case 1:
              dyValue = 10; // 안전함
              break;
            case 2:
              dyValue = 15; // 가성비
              break;
            case 3:
              dyValue = 15; // 청결도
              break;
            case 4:
              dyValue = 10; // 편리함
              break;
            default:
              dyValue = 10;
          }

          return (
            <text
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dy={`${dyValue}px`}
              key={i}
            >
              {labels[i]}
            </text>
          );
        })}
      </Graph>
    </Container>
  );
};

export default PentagonGraph;

const Container = styled.div`
  ${fontMix(10, theme.mainBlack)}
`;

const Graph = styled.svg`
  width: ${({ svgSize }) => svgSize}px;
  height: ${({ svgSize }) => svgSize}px;
`;
