import React from 'react';
import { TEXT_TIP } from '../constants';
import { MobileRoadMapNS } from './type';
import MobileRoadMap from './RoadMap';

type RoadMapBoxProps = MobileRoadMapNS.RoadMapBoxProps;

const RoadMapBox: React.FC<RoadMapBoxProps> = React.memo((props) => {
  const { nodes, title, tip, aosData, titleClassName, footerClassName, roadMapClassName, ...other } = props;
  return (
    <div className="mobile-road-map">
      <div className={`mobile-road-map-title ${titleClassName}`} data-aos={aosData}>{title}</div>
      <MobileRoadMap nodes={nodes} aosData={aosData} className={roadMapClassName} {...other} />
      <div className={`mobile-road-map-footer ${footerClassName}`} data-aos={aosData}>{tip}</div>
    </div>
  );
});

RoadMapBox.defaultProps = {
  title: 'RoadMap',
  tip: TEXT_TIP,
  aosData: 'fade-up',
};

export default RoadMapBox;
