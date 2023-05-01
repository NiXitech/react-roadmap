import React from 'react';
import { TEXT_TIP } from '../constants';
import RoadMap from './RoadMap';
import { RoadMapNS } from './type';

type RoadMapBoxProps = RoadMapNS.RoadMapBoxProps;

const RoadMapBox: React.FC<RoadMapBoxProps> = React.memo((props) => {
  const { nodes, title, tip, ...other } = props;
  return (
    <div className="road-map">
      <div className="road-map-title">
        {title}
        <div className="road-map-tip">{tip}</div>
      </div>
      <RoadMap nodes={nodes} {...other} />
    </div>
  );
});

RoadMapBox.defaultProps = {
  title: 'RoadMap',
  tip: TEXT_TIP,
};

export default RoadMapBox;
