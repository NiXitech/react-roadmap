import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  NODE_1_TITLE,
  NODE_1_YEAR,
  NODE_2_TITLE,
  NODE_2_YEAR,
  NODE_3_TITLE,
  NODE_3_YEAR,
  NODE_4_TITLE,
  NODE_4_YEAR,
  NODE_5_TITLE,
  NODE_5_YEAR,
  NODE_6_TITLE,
  NODE_6_YEAR,
  NODE_7_TITLE,
  NODE_7_YEAR,
  NODE_8_TITLE,
  NODE_8_YEAR,
  NODE_9_TITLE,
  NODE_9_YEAR,
} from '../../constants';
import { MobileRoadMapBox, MobileRoadMapNS } from '@/index';
import {
  CIRCLE_CURRENT_COLOR,
  CIRCLE_PASSED_COLOR,
  TEXT_YEAR_PASSED_COLOR,
} from '@/mobile/constant';
import './index.less';

type RoadMapNodes = MobileRoadMapNS.RoadMapNodes;

const NODES: RoadMapNodes[] = [
  {
    circleColor: CIRCLE_PASSED_COLOR,
    yearColor: TEXT_YEAR_PASSED_COLOR,
    title: NODE_1_TITLE,
    year: NODE_1_YEAR,
  },
  {
    circleColor: CIRCLE_PASSED_COLOR,
    yearColor: TEXT_YEAR_PASSED_COLOR,
    title: NODE_2_TITLE,
    year: NODE_2_YEAR,
  },
  {
    title: NODE_3_TITLE,
    year: NODE_3_YEAR,
    circleColor: CIRCLE_CURRENT_COLOR,
  },
  {
    title: NODE_4_TITLE,
    year: NODE_4_YEAR,
  },
  {
    title: NODE_5_TITLE,
    year: NODE_5_YEAR,
  },

  {
    title: NODE_6_TITLE,
    year: NODE_6_YEAR,
  },
  {
    title: NODE_7_TITLE,
    year: NODE_7_YEAR,
  },
  {
    title: NODE_8_TITLE,
    year: NODE_8_YEAR,
  },
  {
    title: NODE_9_TITLE,
    year: NODE_9_YEAR,
  },
];

const ExampleMobile = React.memo(() => {

  const [nodes, setNodes] = useState(NODES);

  const requestRef = useRef<(typeof requestAnimationFrame)>();

  const animate = useCallback((time: number) => {
    if (time <= 800) {
      // 第一个立即展示，后续按照毫秒计算展示
      nodes[0].passed = true;
      setNodes([...nodes]);
    } else if (time <= 1000) {
      nodes[1].passed = true;
      setNodes([...nodes]);
    } else {
      return;
    }
    // 递归调用
    (requestRef as any).current = requestAnimationFrame(animate);
  }, [nodes])

  useEffect(() => {
    // 开始动画
    (requestRef as any).current = requestAnimationFrame(animate);
    // 清理函数
    return () => cancelAnimationFrame(requestRef.current as any);
  }, [animate]);
  
  return (
    <div className="example-mobile">
      <MobileRoadMapBox nodes={nodes} />
    </div>
  );
});
export default ExampleMobile;
