import {
  CIRCLE_COLOR,
  TEXT_YEAR_COLOR,
  TEXT_YEAR_Y_OFFSET,
  TEXT_Y_OFFSET,
  CIRCLE_R,
  TEXT_WIDTH,
  TEXT_HEIGHT,
  PASSED_COLOR,
  TEXT_TITLE_FONT_SIZE,
  TEXT_YEAR_FONT_SIZE,
  TEXT_DESC_FONT_SIZE,
  TEXT_DESC_WIDTH,
} from './constant';
import React from 'react';
import { RoadMapNS } from './type';
import cls from 'classnames';
import { OpacityEnum } from '../enums';

type CircleBoxProps = RoadMapNS.CircleBoxProps;

const CircleBox: React.FC<CircleBoxProps> = (props) => {
  const {
    x,
    y,
    title,
    year,
    desc,
    color,
    yearColor,
    passed,
    passedColor,
    titleFontSize,
    yearFontSize,
    descFontSize,
  } = props;

  const circleX = x;
  const circleY = y;
  const textYearX = circleX - TEXT_WIDTH / 2;
  const textYearY = circleY - TEXT_YEAR_Y_OFFSET;
  const titleX = circleX - TEXT_WIDTH / 2;
  const titleY = circleY + TEXT_Y_OFFSET;
  const descX = circleX - TEXT_WIDTH / 2;
  const descY = circleY + 2 * TEXT_Y_OFFSET;

  return (
    <g >
      <circle cx={circleX} cy={circleY} r={CIRCLE_R} fill={color} />
        <g transform={`translate(${circleX - CIRCLE_R / 2}, ${circleY - CIRCLE_R / 2})`}>
          <path
            className={cls({
              'road-map--enter': passed,
            })}
            style={{
              opacity: passed ? OpacityEnum.SHOW : OpacityEnum.HIDE,
            }}
            x={circleX}
            y={circleY}
            d="M0,12.5C4.11242,13.9661,7.1582,17.6376,9.5,21C12.7918,16.0497,16.0457,10.5211,21,9L20.5,0C15.6676,3.49994,12.468,8.01189,9.5,14C8.00133,12.1765,6.24184,10.4752,4,9L0,12.5Z"
            fill={passedColor}
          />
        </g>

      <foreignObject
        fontSize={yearFontSize}
        x={textYearX}
        y={textYearY}
        width={TEXT_WIDTH}
        height={TEXT_HEIGHT}
      >
        <div
          className="road-map--svg__year"
          style={{
            color: yearColor,
          }}
        >
          {year}
        </div>
      </foreignObject>

      <foreignObject
        fontSize={titleFontSize}
        x={titleX}
        y={titleY}
        width={TEXT_WIDTH}
        height={TEXT_HEIGHT}
      >
        <div className="road-map--svg__title">{title}</div>
      </foreignObject>
      <foreignObject
        fontSize={descFontSize}
        x={descX}
        y={descY}
        width={TEXT_DESC_WIDTH}
        height={TEXT_HEIGHT}
      >
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
  titleFontSize: TEXT_TITLE_FONT_SIZE,
  year: '2023',
  yearFontSize: TEXT_YEAR_FONT_SIZE,
  desc: '描述信息',
  descFontSize: TEXT_DESC_FONT_SIZE,
  passed: false,
  passedColor: PASSED_COLOR,
};

export default CircleBox;
