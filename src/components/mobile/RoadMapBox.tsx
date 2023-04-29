import { FC, memo } from 'react';
import { TEXT_TIP } from '../../constants';
import { MobileRoadMap, MobileRoadMapNS } from '.';

type RoadMapBoxProps = MobileRoadMapNS.RoadMapBoxProps;

const RoadMapBox: FC<RoadMapBoxProps> = memo((props) => {
  const { nodes, title, tip } = props;
  return (
    <div className="mobile-road-map">
      <div className="mobile-road-map-title">{title}</div>
      <MobileRoadMap nodes={nodes} />
      <div className="mobile-road-map-footer">{tip}</div>
    </div>
  );
});

RoadMapBox.defaultProps = {
  title: 'RoadMap',
  tip: TEXT_TIP,
};

export default RoadMapBox;
