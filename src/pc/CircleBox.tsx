import {
  CIRCLE_COLOR,
  TEXT_YEAR_COLOR,
  TEXT_YEAR_Y_OFFSET,
  TEXT_Y_OFFSET,
  CIRCLE_R,
  TEXT_WIDTH,
  TEXT_HEIGHT,
  PASSED_COLOR,
} from './constant';
import { FC } from 'react';
import { RoadMapNS } from './type';

type CircleBoxProps = RoadMapNS.CircleBoxProps;

const CircleBox: FC<CircleBoxProps> = (props) => {
  const { x, y, title, year, desc, color, yearColor, passed, passedColor } = props;

  const circleX = x;
  const circleY = y;
  const textYearX = circleX - TEXT_WIDTH / 2;
  const textYearY = circleY - TEXT_YEAR_Y_OFFSET;
  const textX = circleX - TEXT_WIDTH / 2;
  const textY = circleY + TEXT_Y_OFFSET;

  return (
    <g>
      <circle cx={circleX} cy={circleY} r={CIRCLE_R} fill={color} />
      {passed && (
        <g transform={`translate(${circleX - CIRCLE_R / 2}, ${circleY - CIRCLE_R / 2})`}>
          <path
            x={circleX}
            y={circleY}
            d="M0,12.5C4.11242,13.9661,7.1582,17.6376,9.5,21C12.7918,16.0497,16.0457,10.5211,21,9L20.5,0C15.6676,3.49994,12.468,8.01189,9.5,14C8.00133,12.1765,6.24184,10.4752,4,9L0,12.5Z"
            fill={passedColor}
          />
        </g>
      )}

      <foreignObject x={textYearX} y={textYearY} width={TEXT_WIDTH} height={TEXT_HEIGHT}>
        <div
          className="road-map--svg__year"
          style={{
            color: yearColor,
          }}
        >
          {year}
        </div>
      </foreignObject>

      <foreignObject x={textX} y={textY} width={TEXT_WIDTH} height={TEXT_HEIGHT}>
        <div className="road-map--svg__title">{title}</div>
        <div className="road-map--svg__desc">
          <p>{desc}</p>
        </div>
      </foreignObject>
    </g>
  );
};

CircleBox.defaultProps = {
  color: CIRCLE_COLOR,
  yearColor: TEXT_YEAR_COLOR,
  title: '标题',
  year: '2023',
  desc: '描述信息',
  passed: false,
  passedColor: PASSED_COLOR,
};

export default CircleBox;
