import React from 'react';
import './index.less';
import {
  NODE_1_DESC,
  NODE_1_TITLE,
  NODE_1_YEAR,
  NODE_2_DESC,
  NODE_2_TITLE,
  NODE_2_YEAR,
  NODE_3_DESC,
  NODE_3_TITLE,
  NODE_3_YEAR,
  NODE_4_DESC,
  NODE_4_TITLE,
  NODE_4_YEAR,
  NODE_5_DESC,
  NODE_5_TITLE,
  NODE_5_YEAR,
  NODE_6_DESC,
  NODE_6_TITLE,
  NODE_6_YEAR,
  NODE_7_DESC,
  NODE_7_TITLE,
  NODE_7_YEAR,
  NODE_8_DESC,
  NODE_8_TITLE,
  NODE_8_YEAR,
  NODE_9_DESC,
  NODE_9_TITLE,
  NODE_9_YEAR,
} from '@/constants';
import { CIRCLE_CURRENT_COLOR, CIRCLE_PASSED_COLOR, TEXT_YEAR_PASSED_COLOR } from '@/pc/constant';
import { RoadMapBox, RoadMapNS } from '@/index';

const NODES: RoadMapNS.RoadMapNodes[] = [
  {
    circleColor: CIRCLE_PASSED_COLOR,
    yearColor: TEXT_YEAR_PASSED_COLOR,
    title: NODE_1_TITLE,
    year: NODE_1_YEAR,
    passed: true,
    desc: NODE_1_DESC,
  },
  {
    circleColor: CIRCLE_PASSED_COLOR,
    yearColor: TEXT_YEAR_PASSED_COLOR,
    title: NODE_2_TITLE,
    year: NODE_2_YEAR,
    passed: true,
    desc: NODE_2_DESC,
  },
  {
    title: NODE_3_TITLE,
    year: NODE_3_YEAR,
    circleColor: CIRCLE_CURRENT_COLOR,
    desc: NODE_3_DESC,
  },
  {
    title: NODE_4_TITLE,
    year: NODE_4_YEAR,
    desc: NODE_4_DESC,
  },
  {
    title: NODE_5_TITLE,
    year: NODE_5_YEAR,
    desc: NODE_5_DESC,
  },

  {
    title: NODE_6_TITLE,
    year: NODE_6_YEAR,
    desc: NODE_6_DESC,
  },
  {
    title: NODE_7_TITLE,
    year: NODE_7_YEAR,
    desc: NODE_7_DESC,
  },
  {
    title: NODE_8_TITLE,
    year: NODE_8_YEAR,
    desc: NODE_8_DESC,
  },
  {
    title: NODE_9_TITLE,
    year: NODE_9_YEAR,
    desc: NODE_9_DESC,
  },
];
const ExamplePC = React.memo(() => {
  return (
    <div className="example-pc">
      <RoadMapBox nodes={NODES} />
    </div>
  );
});
export default ExamplePC;
