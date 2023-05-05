import React from 'react';
import {
  CIRCLE_COLOR,
  CIRCLE_R,
  TEXT_WIDTH,
  TEXT_HEIGHT,
  TEXT_YEAR_COLOR,
  TEXT_YEAR_Y_OFFSET,
  TEXT_Y_OFFSET,
  PASSED_COLOR,
  TEXT_YEAR_FONT_SIZE,
  TEXT_TITLE_FONT_SIZE,
} from './constant';
import { MobileRoadMapNS } from './type';
import cls from 'classnames';
import { OpacityEnum } from '../enums';

type CircleBoxProps = MobileRoadMapNS.CircleBoxProps;

const CircleBox: React.FC<CircleBoxProps> = (props) => {
  const { x, y, title, year, color, yearColor, passed, passedColor, yearFontSize, titleFontSize } =
    props;

  const circleX = x;
  const circleY = y;
  const textYearX = circleX - TEXT_WIDTH / 2;
  const textYearY = circleY - TEXT_YEAR_Y_OFFSET;
  const textX = circleX - TEXT_WIDTH / 2;
  const textY = circleY + TEXT_Y_OFFSET;

  return (
    <g>
      <circle cx={circleX} cy={circleY} r={CIRCLE_R} fill={color} />
        <g transform={`translate(${circleX - CIRCLE_R / 2}, ${circleY - CIRCLE_R / 2})`}>
          <path
           className={cls({
            'mobile-road-map--enter': passed,
          })}
          style={{
            opacity: passed ? OpacityEnum.SHOW : OpacityEnum.HIDE,
          }}
            d="M0,8.75C2.8787,9.77628,5.01074,12.3464,6.65,14.7C8.95423,11.2348,11.232,7.3648,14.7,6.3L14.35,0C10.9673,2.44996,8.72758,5.60832,6.65,9.8C5.60093,8.52358,4.36929,7.33265,2.8,6.3L0,8.75Z"
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
          className="mobile-road-map--svg__year"
          style={{
            color: yearColor,
          }}
        >
          {year}
        </div>
      </foreignObject>

      <foreignObject
        fontSize={titleFontSize}
        x={textX}
        y={textY}
        width={TEXT_WIDTH}
        height={TEXT_HEIGHT}
      >
        <div className="mobile-road-map--svg__title">{title}</div>
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
  passed: false,
  passedColor: PASSED_COLOR,
};
export default CircleBox;
