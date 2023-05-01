import React from 'react';
import { TEXT_TIP } from '../constants';
import { MobileRoadMapNS } from './type';
import MobileRoadMap from './RoadMap';

type RoadMapBoxProps = MobileRoadMapNS.RoadMapBoxProps;

const RoadMapBox: React.FC<RoadMapBoxProps> = React.memo((props) => {
  const { nodes, title, tip, ...other } = props;
  return (
    <div className="mobile-road-map">
      <div className="mobile-road-map-title">{title}</div>
      <MobileRoadMap nodes={nodes} {...other} />
      <div className="mobile-road-map-footer">{tip}</div>
    </div>
  );
});

RoadMapBox.defaultProps = {
  title: 'RoadMap',
  tip: TEXT_TIP,
};

export default RoadMapBox;
