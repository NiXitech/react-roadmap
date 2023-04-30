import {
  END_Y,
  END_X,
  PATH_OFFSET_Y,
  START_X,
  START_Y,
  SVG_HEIGHT,
  SVG_WIDTH,
  CIRCLE_LIST,
  SVG_VIEWBOX_WIDTH,
  SVG_VIEWBOX_HEIGHT,
} from './constant';
import CircleBox from './CircleBox';
import { FC } from 'react';
import { MobileRoadMapNS } from './type';
import { getFinalNodes } from '../utils';

type RoadMapProps = MobileRoadMapNS.RoadMapProps;

/**
 * 使用svg实现，便于拓展
 * @param props
 * @returns
 */
const RoadMap: FC<RoadMapProps> = (props) => {
  const { nodes, startColor, endColor } = props;
  const finalNodes = getFinalNodes(CIRCLE_LIST, nodes);

  return (
    <div className="mobile-road-map--svg">
      <svg
        className="mobile-road-map--svg__line"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        version="1.1"
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
        viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
      >
        <defs>
          <linearGradient x1="0.4" y1="1" x2="0.4" y2="-0.05" id="mobile-line-linear-gradient">
            <stop offset="0%" stopColor="#96F0F0" stopOpacity="1" />
            <stop offset="48%" stopColor="#FE9BFD" stopOpacity="1" />
            <stop offset="81%" stopColor="#FCEA78" stopOpacity="1" />
            <stop offset="100%" stopColor="#78FC8E" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* 路径 */}
        <g transform={`translate(0, ${PATH_OFFSET_Y})`}>
          {/* <path
            d="M440,458 L86.7566,458 Q74.8038,458,63.8853,453.875 Q53.3405,449.415,45.2094,441.284 Q37.0782,433.153,32.6182,422.608 Q28,411.689,28,399.737 Q28,387.784,32.6182,376.866 Q37.0782,366.321,45.2094,358.19 Q53.3405,350.059,63.8853,345.599 Q74.8038,340.98,86.7566,340.98 L330.223,340.98 Q341.369,340.98,351.544,336.677 Q361.374,332.519,368.956,324.937 Q376.538,317.354,380.696,307.525 Q385,297.349,385,286.204 Q385,275.058,380.696,264.883Q376.538,255.053,368.956,247.471Q361.374,239.888,351.544,235.731Q341.369,231.427,330.223,231.427L86.7922,231.427Q74.8324,231.427,63.907,226.806Q53.356,222.343,45.2198,214.207Q37.0837,206.071,32.621,195.52Q28,184.595,28,172.635Q28,160.675,32.621,149.75Q37.0837,139.198,45.2198,131.062Q53.356,122.926,63.907,118.464Q74.8323,113.843,86.7922,113.843L330.079,113.843Q341.254,113.843,351.456,109.527Q361.312,105.359,368.914,97.7565Q376.516,90.1542,380.685,80.2985Q385,70.0964,385,58.9213Q385,47.7461,380.685,37.544Q376.516,27.6883,368.914,20.0861Q361.312,12.4838,351.456,8.31517Q341.254,4.00001,330.079,4.00001L209.456,4L0,4L0,0L209.456,0L330.079,0.000010000000000065512Q342.065,0.000010000000000065512,353.014,4.63115Q363.588,9.103670000000001,371.742,17.2576Q379.896,25.4115,384.369,35.9858Q389,46.9349,389,58.9213Q389,70.9076,384.369,81.8567Q379.896,92.431,371.742,100.5849Q363.588,108.739,353.014,113.211Q342.065,117.843,330.079,117.843L86.7922,117.843Q75.6435,117.843,65.4652,122.148Q55.6327,126.306,48.0483,133.891Q40.4638,141.475,36.305,151.308Q32,161.486,32,172.635Q32,183.784,36.305,193.962Q40.4638,203.794,48.0483,211.379Q55.6328,218.963,65.4652,223.122Q75.6436,227.427,86.7922,227.427L330.223,227.427Q342.18,227.427,353.102,232.047Q363.651,236.508,371.785,244.642Q379.919,252.776,384.38,263.325Q389,274.247,389,286.204Q389,298.161,384.38,309.083Q379.918,319.631,371.785,327.765Q363.651,335.899,353.102,340.361Q342.18,344.98,330.223,344.98L86.7566,344.98Q75.615,344.98,65.4435,349.283Q55.6173,353.439,48.0378,361.018Q40.4583,368.598,36.3022,378.424Q32,388.595,32,399.737Q32,410.878,36.3022,421.05Q40.4583,430.876,48.0378,438.456Q55.6173,446.035,65.4435,450.191Q75.6149,454.494,86.7566,454.494L400,454.494L400,458Z"
            fill="url(#mobile-line-linear-gradient)"
          /> */}
          <path
            d={`
            M440,458 

            L86.7566,458 

            Q74.8038,458,63.8853,453.875 
            Q53.3405,449.415,45.2094,441.284 
            Q37.0782,433.153,32.6182,422.608 
            Q28,411.689,28,399.737 
            Q28,387.784,32.6182,376.866 
            Q37.0782,366.321,45.2094,358.19 
            Q53.3405,350.059,63.8853,345.599 
            Q74.8038,340.98,86.7566,340.98 

            L330.223,340.98 

            Q341.369,340.98,351.544,336.677 
            Q361.374,332.519,368.956,324.937 
            Q376.538,317.354,380.696,307.525 
            Q385,297.349,385,286.204 
            Q385,275.058,380.696,264.883
            Q376.538,255.053,368.956,247.471
            Q361.374,239.888,351.544,235.731
            Q341.369,231.427,330.223,231.427

            L86.7922,231.427
            
            Q74.8324,231.427,63.907,226.806
            Q53.356,222.343,45.2198,214.207
            Q37.0837,206.071,32.621,195.52
            Q28,184.595,28,172.635
            Q28,160.675,32.621,149.75
            Q37.0837,139.198,45.2198,131.062
            Q53.356,122.926,63.907,118.464
            Q74.8323,113.843,86.7922,113.843

            L330.079,113.843

            Q341.254,113.843,351.456,109.527
            Q361.312,105.359,368.914,97.7565
            Q376.516,90.1542,380.685,80.2985
            Q385,70.0964,385,58.9213
            Q385,47.7461,380.685,37.544
            Q376.516,27.6883,368.914,20.0861
            Q361.312,12.4838,351.456,8.31517
            Q341.254,4.00001,330.079,4.00001

            L209.456,4
            L0,4
            L0,0
            L209.456,0
            L330.079,0.000010000000000065512
            
            Q342.065,0.000010000000000065512,353.014,4.63115
            Q363.588,9.103670000000001,371.742,17.2576
            Q379.896,25.4115,384.369,35.9858
            Q389,46.9349,389,58.9213
            Q389,70.9076,384.369,81.8567
            Q379.896,92.431,371.742,100.5849
            Q363.588,108.739,353.014,113.211
            Q342.065,117.843,330.079,117.84

            L86.7922,117.843

            Q75.6435,117.843,65.4652,122.148
            Q55.6327,126.306,48.0483,133.891
            Q40.4638,141.475,36.305,151.308
            Q32,161.486,32,172.635
            Q32,183.784,36.305,193.962
            Q40.4638,203.794,48.0483,211.379
            Q55.6328,218.963,65.4652,223.122
            Q75.6436,227.427,86.7922,227.427

            L330.223,227.427

            Q342.18,227.427,353.102,232.047
            Q363.651,236.508,371.785,244.642
            Q379.919,252.776,384.38,263.325
            Q389,274.247,389,286.204
            Q389,298.161,384.38,309.083
            Q379.918,319.631,371.785,327.765
            Q363.651,335.899,353.102,340.361
            Q342.18,344.98,330.223,344.98

            L86.7566,344.98
            
            Q75.615,344.98,65.4435,349.283
            Q55.6173,353.439,48.0378,361.018
            Q40.4583,368.598,36.3022,378.424
            Q32,388.595,32,399.737
            Q32,410.878,36.3022,421.05
            Q40.4583,430.876,48.0378,438.456
            Q55.6173,446.035,65.4435,450.191
            Q75.6149,454.494,86.7566,454.494

            L${SVG_VIEWBOX_WIDTH},454.494
            L${SVG_VIEWBOX_WIDTH},458Z`}
            fill="url(#mobile-line-linear-gradient)"
          />
        </g>

        <g>
          {finalNodes.map((circle, index) => {
            return <CircleBox key={index} {...circle} />;
          })}
        </g>

        {/* 开始箭头 */}
        <g transform={`matrix(0,1,-1,0,${START_X},${START_Y})`}>
          <path
            d="M46.5933,15.75Q46.626000000000005,15.8067,46.655,15.8654Q46.6839,15.9241,46.709,15.9846Q46.734,16.0451,46.7551,16.1071Q46.7761,16.1691,46.793099999999995,16.2324Q46.81,16.2956,46.8228,16.3598Q46.8356,16.424,46.8441,16.4889Q46.8527,16.5539,46.856899999999996,16.6192Q46.8612,16.6845,46.8612,16.75Q46.8612,16.8155,46.856899999999996,16.8808Q46.8527,16.9461,46.8441,17.0111Q46.8356,17.076,46.8228,17.1402Q46.81,17.2044,46.793099999999995,17.2676Q46.7761,17.3309,46.7551,17.3929Q46.734,17.4549,46.709,17.5154Q46.6839,17.5759,46.655,17.6346Q46.626000000000005,17.6933,46.5933,17.75Q46.560500000000005,17.8067,46.5242,17.8611Q46.4878,17.9156,46.447900000000004,17.9675Q46.408100000000005,18.0195,46.3649,18.0687Q46.3217,18.1179,46.275400000000005,18.1642Q46.2291,18.2105,46.1799,18.2537Q46.130700000000004,18.2969,46.0787,18.3367Q46.0268,18.3766,45.9724,18.4129Q45.9179,18.4493,45.8612,18.482Q45.804500000000004,18.5148,45.7458,18.5437Q45.6871,18.5727,45.626599999999996,18.5978Q45.5661,18.6228,45.5041,18.6439Q45.442099999999996,18.6649,45.3789,18.6819Q45.3156,18.6988,45.251400000000004,18.7116Q45.187200000000004,18.7243,45.122299999999996,18.7329Q45.0574,18.7414,44.992000000000004,18.7457Q44.9267,18.75,44.8612,18.75L30.13878,18.75Q30.07331,18.75,30.00798,18.7457Q29.94265,18.7414,29.87773,18.7329Q29.812820000000002,18.7243,29.7486,18.7116Q29.68439,18.6988,29.62115,18.6819Q29.5579,18.6649,29.495910000000002,18.6439Q29.43391,18.6228,29.37342,18.5978Q29.31293,18.5727,29.25421,18.5437Q29.19549,18.5148,29.13878,18.482Q29.08208,18.4493,29.027639999999998,18.4129Q28.9732,18.3766,28.92126,18.3367Q28.869320000000002,18.2969,28.82009,18.2537Q28.77087,18.2105,28.72457,18.1642Q28.67827,18.1179,28.63511,18.0687Q28.59194,18.0195,28.55208,17.9675Q28.51222,17.9156,28.47585,17.8611Q28.43947,17.8067,28.40673,17.75Q28.374,17.6933,28.34504,17.6346Q28.31608,17.5759,28.29103,17.5154Q28.26597,17.4549,28.24492,17.3929Q28.22388,17.3309,28.20693,17.2676Q28.18999,17.2044,28.17721,17.1402Q28.16444,17.076,28.15589,17.0111Q28.14735,16.9461,28.14307,16.8808Q28.13878,16.8155,28.13878,16.75Q28.13878,16.6845,28.14307,16.6192Q28.14735,16.5539,28.15589,16.4889Q28.16444,16.424,28.17721,16.3598Q28.18999,16.2956,28.20693,16.2324Q28.22388,16.1691,28.24492,16.1071Q28.26597,16.0451,28.29103,15.9846Q28.31608,15.9241,28.34504,15.8654Q28.374,15.8067,28.40673,15.75L35.7679,3Q35.8007,2.9433,35.8371,2.88886Q35.873400000000004,2.83442,35.9133,2.78248Q35.9532,2.73053,35.9963,2.68131Q36.039500000000004,2.63208,36.0858,2.58579Q36.1321,2.53949,36.1813,2.49632Q36.2305,2.45315,36.2825,2.41329Q36.3344,2.37344,36.3889,2.33706Q36.4433,2.30069,36.5,2.26795Q36.5567,2.23521,36.6154,2.20625Q36.674099999999996,2.1773,36.7346,2.15224Q36.7951,2.12719,36.8571,2.10614Q36.9191,2.08509,36.9824,2.06815Q37.0456,2.0512,37.1098,2.03843Q37.174,2.02566,37.2389,2.01711Q37.3039,2.00856,37.3692,2.00428Q37.4345,2,37.5,2Q37.5655,2,37.6308,2.00428Q37.6961,2.00856,37.7611,2.01711Q37.826,2.02566,37.8902,2.03843Q37.9544,2.0512,38.0176,2.06815Q38.0809,2.08509,38.1429,2.10614Q38.2049,2.12719,38.2654,2.15224Q38.325900000000004,2.1773,38.3846,2.20625Q38.4433,2.23521,38.5,2.26795Q38.5567,2.30069,38.6111,2.33706Q38.6656,2.37344,38.7175,2.41329Q38.7695,2.45315,38.8187,2.49632Q38.8679,2.53949,38.9142,2.58579Q38.960499999999996,2.63208,39.0037,2.68131Q39.0469,2.73053,39.0867,2.78248Q39.126599999999996,2.83442,39.1629,2.88886Q39.1993,2.9433,39.2321,3L46.5933,15.75Z"
            fill={startColor}
          />
        </g>
        {/* 结束箭头 */}
        <g transform={`matrix(0,1,-1,0,${END_X},${END_Y})`}>
          <path
            d="M46.5933,15.75Q46.626000000000005,15.8067,46.655,15.8654Q46.6839,15.9241,46.709,15.9846Q46.734,16.0451,46.7551,16.1071Q46.7761,16.1691,46.793099999999995,16.2324Q46.81,16.2956,46.8228,16.3598Q46.8356,16.424,46.8441,16.4889Q46.8527,16.5539,46.856899999999996,16.6192Q46.8612,16.6845,46.8612,16.75Q46.8612,16.8155,46.856899999999996,16.8808Q46.8527,16.9461,46.8441,17.0111Q46.8356,17.076,46.8228,17.1402Q46.81,17.2044,46.793099999999995,17.2676Q46.7761,17.3309,46.7551,17.3929Q46.734,17.4549,46.709,17.5154Q46.6839,17.5759,46.655,17.6346Q46.626000000000005,17.6933,46.5933,17.75Q46.560500000000005,17.8067,46.5242,17.8611Q46.4878,17.9156,46.447900000000004,17.9675Q46.408100000000005,18.0195,46.3649,18.0687Q46.3217,18.1179,46.275400000000005,18.1642Q46.2291,18.2105,46.1799,18.2537Q46.130700000000004,18.2969,46.0787,18.3367Q46.0268,18.3766,45.9724,18.4129Q45.9179,18.4493,45.8612,18.482Q45.804500000000004,18.5148,45.7458,18.5437Q45.6871,18.5727,45.626599999999996,18.5978Q45.5661,18.6228,45.5041,18.6439Q45.442099999999996,18.6649,45.3789,18.6819Q45.3156,18.6988,45.251400000000004,18.7116Q45.187200000000004,18.7243,45.122299999999996,18.7329Q45.0574,18.7414,44.992000000000004,18.7457Q44.9267,18.75,44.8612,18.75L30.13878,18.75Q30.07331,18.75,30.00798,18.7457Q29.94265,18.7414,29.87773,18.7329Q29.812820000000002,18.7243,29.7486,18.7116Q29.68439,18.6988,29.62115,18.6819Q29.5579,18.6649,29.495910000000002,18.6439Q29.43391,18.6228,29.37342,18.5978Q29.31293,18.5727,29.25421,18.5437Q29.19549,18.5148,29.13878,18.482Q29.08208,18.4493,29.027639999999998,18.4129Q28.9732,18.3766,28.92126,18.3367Q28.869320000000002,18.2969,28.82009,18.2537Q28.77087,18.2105,28.72457,18.1642Q28.67827,18.1179,28.63511,18.0687Q28.59194,18.0195,28.55208,17.9675Q28.51222,17.9156,28.47585,17.8611Q28.43947,17.8067,28.40673,17.75Q28.374,17.6933,28.34504,17.6346Q28.31608,17.5759,28.29103,17.5154Q28.26597,17.4549,28.24492,17.3929Q28.22388,17.3309,28.20693,17.2676Q28.18999,17.2044,28.17721,17.1402Q28.16444,17.076,28.15589,17.0111Q28.14735,16.9461,28.14307,16.8808Q28.13878,16.8155,28.13878,16.75Q28.13878,16.6845,28.14307,16.6192Q28.14735,16.5539,28.15589,16.4889Q28.16444,16.424,28.17721,16.3598Q28.18999,16.2956,28.20693,16.2324Q28.22388,16.1691,28.24492,16.1071Q28.26597,16.0451,28.29103,15.9846Q28.31608,15.9241,28.34504,15.8654Q28.374,15.8067,28.40673,15.75L35.7679,3Q35.8007,2.9433,35.8371,2.88886Q35.873400000000004,2.83442,35.9133,2.78248Q35.9532,2.73053,35.9963,2.68131Q36.039500000000004,2.63208,36.0858,2.58579Q36.1321,2.53949,36.1813,2.49632Q36.2305,2.45315,36.2825,2.41329Q36.3344,2.37344,36.3889,2.33706Q36.4433,2.30069,36.5,2.26795Q36.5567,2.23521,36.6154,2.20625Q36.674099999999996,2.1773,36.7346,2.15224Q36.7951,2.12719,36.8571,2.10614Q36.9191,2.08509,36.9824,2.06815Q37.0456,2.0512,37.1098,2.03843Q37.174,2.02566,37.2389,2.01711Q37.3039,2.00856,37.3692,2.00428Q37.4345,2,37.5,2Q37.5655,2,37.6308,2.00428Q37.6961,2.00856,37.7611,2.01711Q37.826,2.02566,37.8902,2.03843Q37.9544,2.0512,38.0176,2.06815Q38.0809,2.08509,38.1429,2.10614Q38.2049,2.12719,38.2654,2.15224Q38.325900000000004,2.1773,38.3846,2.20625Q38.4433,2.23521,38.5,2.26795Q38.5567,2.30069,38.6111,2.33706Q38.6656,2.37344,38.7175,2.41329Q38.7695,2.45315,38.8187,2.49632Q38.8679,2.53949,38.9142,2.58579Q38.960499999999996,2.63208,39.0037,2.68131Q39.0469,2.73053,39.0867,2.78248Q39.126599999999996,2.83442,39.1629,2.88886Q39.1993,2.9433,39.2321,3L46.5933,15.75Z"
            fill={endColor}
          />
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
