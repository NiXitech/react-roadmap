import { SVG_WIDTH, SVG_HEIGHT, CIRCLE_LIST } from './constant';
import React from 'react';
import CircleBox from './CircleBox';
import { getFinalNodes } from '../utils';
import { RoadMapNS } from './type';

type RoadMapProps = RoadMapNS.RoadMapProps;

/**
 * 使用svg实现，便于拓展
 * @param props
 * @returns
 */
const RoadMap: React.FC<RoadMapProps> = (props) => {
  const { nodes, startColor, endColor } = props;
  const finalNodes = getFinalNodes(CIRCLE_LIST, nodes);

  return (
    <div className="road-map--svg">
      <svg
        className="road-map--svg__line"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
        height={SVG_HEIGHT}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      >
        <defs>
          <linearGradient x1="0" y1="1" x2="0.4" y2="-0.1" id="line-linear-gradient">
            <stop offset="0%" stopColor="#96F0F0" stopOpacity="1" />
            <stop offset="48%" stopColor="#FE9BFD" stopOpacity="1" />
            <stop offset="81%" stopColor="#FCEA78" stopOpacity="1" />
            <stop offset="100%" stopColor="#78FC8E" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* 路径 */}
        <g transform="matrix(-1,0,0,1,3846,0)">
          <path
            d="M3843,6L2412.5,6Q2388.796,6,2367.154,15.1539Q2346.247,23.9967,2330.122,40.1221Q2313.997,56.2475,2305.154,77.1539Q2296,98.7959,2296,122.5Q2296,146.204,2305.154,167.846Q2313.997,188.752,2330.122,204.878Q2346.247,221.003,2367.154,229.846Q2388.796,239,2412.5,239L3344,239Q3369.33,239,3392.46,248.785Q3414.8,258.235,3432.0299999999997,275.465Q3449.26,292.694,3458.71,315.038Q3468.5,338.172,3468.5,363.5Q3468.5,388.829,3458.71,411.962Q3449.26,434.306,3432.0299999999997,451.535Q3414.8,468.765,3392.46,478.215Q3369.33,488,3344,488L1923,488L1923,482L3344,482Q3368.1099999999997,482,3390.12,472.689Q3411.3900000000003,463.695,3427.79,447.292Q3444.19,430.891,3453.19,409.625Q3462.5,387.612,3462.5,363.5Q3462.5,339.389,3453.19,317.375Q3444.19,296.109,3427.79,279.708Q3411.3900000000003,263.305,3390.12,254.311Q3368.1099999999997,245,3344,245L2412.5,245Q2387.579,245,2364.817,235.372Q2342.832,226.073,2325.879,209.121Q2308.927,192.167,2299.628,170.183Q2290,147.421,2290,122.5Q2290,97.5792,2299.628,74.8166Q2308.927,52.8324,2325.879,35.8794Q2342.832,18.9265,2364.817,9.62789Q2387.579,0,2412.5,0L3843,0L3843,6Z"
            fill="url(#line-linear-gradient)"
          />
        </g>
        {/* 开始箭头 */}
        <g transform="matrix(0,1,-1,0,239,-69)">
          <path
            d="M91.0526,33Q91.08529999999999,33.0567,91.1142,33.1154Q91.14320000000001,33.1741,91.1683,33.2346Q91.1933,33.2951,91.2144,33.3571Q91.2354,33.4191,91.2524,33.4824Q91.2693,33.5456,91.2821,33.6098Q91.29480000000001,33.674,91.30340000000001,33.7389Q91.31190000000001,33.8039,91.31620000000001,33.8692Q91.32050000000001,33.9345,91.32050000000001,34Q91.32050000000001,34.0655,91.31620000000001,34.1308Q91.31190000000001,34.1961,91.30340000000001,34.2611Q91.2949,34.326,91.2821,34.3902Q91.2693,34.4544,91.2524,34.5176Q91.2354,34.5809,91.2144,34.6429Q91.1933,34.7049,91.1683,34.7654Q91.14320000000001,34.8259,91.1143,34.8846Q91.08529999999999,34.9433,91.0526,35Q91.0198,35.0567,90.98349999999999,35.1111Q90.9471,35.1656,90.9072,35.2175Q90.8674,35.2695,90.82419999999999,35.3187Q90.781,35.3679,90.7347,35.4142Q90.6884,35.4605,90.6392,35.5037Q90.59,35.5468,90.538,35.5867Q90.4861,35.6266,90.4317,35.6629Q90.3772,35.6993,90.32050000000001,35.732Q90.2638,35.7648,90.2051,35.7937Q90.1464,35.8227,90.08590000000001,35.8478Q90.02539999999999,35.8728,89.96340000000001,35.8939Q89.9014,35.9149,89.8382,35.9319Q89.7749,35.9488,89.7107,35.9616Q89.6465,35.9743,89.58160000000001,35.9829Q89.5167,35.9914,89.4513,35.9957Q89.386,36,89.32050000000001,36L54.67949,36Q54.61402,36,54.54869,35.9957Q54.48335,35.9914,54.418440000000004,35.9829Q54.35353,35.9743,54.28931,35.9616Q54.2251,35.9488,54.16185,35.9319Q54.09861,35.9149,54.036609999999996,35.8939Q53.97462,35.8728,53.91413,35.8478Q53.85364,35.8227,53.79492,35.7937Q53.73619,35.7648,53.67949,35.732Q53.62279,35.6993,53.56835,35.6629Q53.51391,35.6266,53.46197,35.5867Q53.41003,35.5468,53.3608,35.5037Q53.31158,35.4605,53.26528,35.4142Q53.21898,35.3679,53.17581,35.3187Q53.13264,35.2695,53.09279,35.2175Q53.05293,35.1656,53.01655,35.1111Q52.98018,35.0567,52.94744,35Q52.914699999999996,34.9433,52.88575,34.8846Q52.856790000000004,34.8259,52.83173,34.7654Q52.80668,34.7049,52.78563,34.6429Q52.76459,34.5809,52.74764,34.5176Q52.73069,34.4544,52.71792,34.3902Q52.70515,34.326,52.696600000000004,34.2611Q52.68806,34.1961,52.68377,34.1308Q52.67949,34.0655,52.67949,34Q52.67949,33.9345,52.68377,33.8692Q52.68806,33.8039,52.696600000000004,33.7389Q52.70515,33.674,52.71792,33.6098Q52.73069,33.5456,52.74764,33.4824Q52.76459,33.4191,52.78563,33.3571Q52.80668,33.2951,52.83173,33.2346Q52.856790000000004,33.1741,52.88575,33.1154Q52.914699999999996,33.0567,52.94744,33L70.2679,3Q70.3007,2.9433,70.33709999999999,2.88886Q70.3734,2.83442,70.41329999999999,2.78248Q70.4531,2.73053,70.4963,2.68131Q70.5395,2.63208,70.5858,2.58579Q70.63210000000001,2.53949,70.6813,2.49632Q70.7305,2.45315,70.7825,2.41329Q70.8344,2.37344,70.8889,2.33706Q70.9433,2.30069,71,2.26795Q71.0567,2.23521,71.1154,2.20625Q71.1741,2.1773,71.2346,2.15224Q71.2951,2.12719,71.3571,2.10614Q71.4191,2.08509,71.4824,2.06815Q71.54560000000001,2.0512,71.6098,2.03843Q71.674,2.02566,71.7389,2.01711Q71.8039,2.00856,71.8692,2.00428Q71.9345,2,72,2Q72.0655,2,72.1308,2.00428Q72.1961,2.00856,72.2611,2.01711Q72.326,2.02566,72.3902,2.03843Q72.45439999999999,2.0512,72.5176,2.06815Q72.5809,2.08509,72.6429,2.10614Q72.7049,2.12719,72.7654,2.15224Q72.8259,2.1773,72.8846,2.20626Q72.9433,2.23521,73,2.26795Q73.0567,2.30069,73.1111,2.33706Q73.1656,2.37344,73.2175,2.41329Q73.2695,2.45315,73.3187,2.49632Q73.36789999999999,2.53949,73.4142,2.58579Q73.4605,2.63208,73.5037,2.68131Q73.5469,2.73053,73.58670000000001,2.78248Q73.6266,2.83442,73.66290000000001,2.88886Q73.6993,2.9433,73.732,3L91.0526,33Z"
            fill={startColor}
          />
        </g>

        {/* 结束箭头 */}
        <g transform="matrix(0,1,-1,0,1720,412)">
          <path
            d="M91.0526,33Q91.08529999999999,33.0567,91.1142,33.1154Q91.14320000000001,33.1741,91.1683,33.2346Q91.1933,33.2951,91.2144,33.3571Q91.2354,33.4191,91.2524,33.4824Q91.2693,33.5456,91.2821,33.6098Q91.29480000000001,33.674,91.30340000000001,33.7389Q91.31190000000001,33.8039,91.31620000000001,33.8692Q91.32050000000001,33.9345,91.32050000000001,34Q91.32050000000001,34.0655,91.31620000000001,34.1308Q91.31190000000001,34.1961,91.30340000000001,34.2611Q91.2949,34.326,91.2821,34.3902Q91.2693,34.4544,91.2524,34.5176Q91.2354,34.5809,91.2144,34.6429Q91.1933,34.7049,91.1683,34.7654Q91.14320000000001,34.8259,91.1143,34.8846Q91.08529999999999,34.9433,91.0526,35Q91.0198,35.0567,90.98349999999999,35.1111Q90.9471,35.1656,90.9072,35.2175Q90.8674,35.2695,90.82419999999999,35.3187Q90.781,35.3679,90.7347,35.4142Q90.6884,35.4605,90.6392,35.5037Q90.59,35.5468,90.538,35.5867Q90.4861,35.6266,90.4317,35.6629Q90.3772,35.6993,90.32050000000001,35.732Q90.2638,35.7648,90.2051,35.7937Q90.1464,35.8227,90.08590000000001,35.8478Q90.02539999999999,35.8728,89.96340000000001,35.8939Q89.9014,35.9149,89.8382,35.9319Q89.7749,35.9488,89.7107,35.9616Q89.6465,35.9743,89.58160000000001,35.9829Q89.5167,35.9914,89.4513,35.9957Q89.386,36,89.32050000000001,36L54.67949,36Q54.61402,36,54.54869,35.9957Q54.48335,35.9914,54.418440000000004,35.9829Q54.35353,35.9743,54.28931,35.9616Q54.2251,35.9488,54.16185,35.9319Q54.09861,35.9149,54.036609999999996,35.8939Q53.97462,35.8728,53.91413,35.8478Q53.85364,35.8227,53.79492,35.7937Q53.73619,35.7648,53.67949,35.732Q53.62279,35.6993,53.56835,35.6629Q53.51391,35.6266,53.46197,35.5867Q53.41003,35.5468,53.3608,35.5037Q53.31158,35.4605,53.26528,35.4142Q53.21898,35.3679,53.17581,35.3187Q53.13264,35.2695,53.09279,35.2175Q53.05293,35.1656,53.01655,35.1111Q52.98018,35.0567,52.94744,35Q52.914699999999996,34.9433,52.88575,34.8846Q52.856790000000004,34.8259,52.83173,34.7654Q52.80668,34.7049,52.78563,34.6429Q52.76459,34.5809,52.74764,34.5176Q52.73069,34.4544,52.71792,34.3902Q52.70515,34.326,52.696600000000004,34.2611Q52.68806,34.1961,52.68377,34.1308Q52.67949,34.0655,52.67949,34Q52.67949,33.9345,52.68377,33.8692Q52.68806,33.8039,52.696600000000004,33.7389Q52.70515,33.674,52.71792,33.6098Q52.73069,33.5456,52.74764,33.4824Q52.76459,33.4191,52.78563,33.3571Q52.80668,33.2951,52.83173,33.2346Q52.856790000000004,33.1741,52.88575,33.1154Q52.914699999999996,33.0567,52.94744,33L70.2679,3Q70.3007,2.9433,70.33709999999999,2.88886Q70.3734,2.83442,70.41329999999999,2.78248Q70.4531,2.73053,70.4963,2.68131Q70.5395,2.63208,70.5858,2.58579Q70.63210000000001,2.53949,70.6813,2.49632Q70.7305,2.45315,70.7825,2.41329Q70.8344,2.37344,70.8889,2.33706Q70.9433,2.30069,71,2.26795Q71.0567,2.23521,71.1154,2.20625Q71.1741,2.1773,71.2346,2.15224Q71.2951,2.12719,71.3571,2.10614Q71.4191,2.08509,71.4824,2.06815Q71.54560000000001,2.0512,71.6098,2.03843Q71.674,2.02566,71.7389,2.01711Q71.8039,2.00856,71.8692,2.00428Q71.9345,2,72,2Q72.0655,2,72.1308,2.00428Q72.1961,2.00856,72.2611,2.01711Q72.326,2.02566,72.3902,2.03843Q72.45439999999999,2.0512,72.5176,2.06815Q72.5809,2.08509,72.6429,2.10614Q72.7049,2.12719,72.7654,2.15224Q72.8259,2.1773,72.8846,2.20626Q72.9433,2.23521,73,2.26795Q73.0567,2.30069,73.1111,2.33706Q73.1656,2.37344,73.2175,2.41329Q73.2695,2.45315,73.3187,2.49632Q73.36789999999999,2.53949,73.4142,2.58579Q73.4605,2.63208,73.5037,2.68131Q73.5469,2.73053,73.58670000000001,2.78248Q73.6266,2.83442,73.66290000000001,2.88886Q73.6993,2.9433,73.732,3L91.0526,33Z"
            fill={endColor}
          />
        </g>
        <g>
          {finalNodes.map((circle, index) => {
            return <CircleBox key={index} {...circle} />;
          })}
        </g>
      </svg>
    </div>
  );
};

RoadMap.defaultProps = {
  startColor: '#78FC8E',
  endColor: '#96F0F0',
};

export default RoadMap;
