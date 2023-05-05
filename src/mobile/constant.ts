import { MobileRoadMapNS } from "./type";

export const SVG_WIDTH = '100%';
export const SVG_HEIGHT = '100%';

export const SVG_VIEWBOX_WIDTH = 404;
export const SVG_VIEWBOX_HEIGHT = 538;


export const PATH_OFFSET_Y = 40;

export const START_X = 45;
export const START_Y = -35 + PATH_OFFSET_Y

export const END_X = 300;
export const END_Y = 419 + PATH_OFFSET_Y;

export const CIRCLE_R = 13;
export const CIRCLE_COLOR = '#FFFFFF';
export const CIRCLE_CURRENT_COLOR = '#FFD35B';
export const CIRCLE_PASSED_COLOR = '#51B843';

export const PASSED_COLOR = '#FFFFFF';

export const TEXT_COLOR = '#FFFFFF';

export const TEXT_YEAR_PASSED_COLOR = '#51B843';
export const TEXT_YEAR_COLOR = '#FFFFFF';
export const TEXT_YEAR_FONT_SIZE = 16;

export const TEXT_TITLE_FONT_SIZE = 12;

export const TEXT_YEAR_Y_OFFSET = -5 + PATH_OFFSET_Y;
export const TEXT_Y_OFFSET = -20 + PATH_OFFSET_Y;

export const COLUMN_ONE_X = 130;
export const COLUMN_TWO_X = 290;

export const CIRCLE_ROW_ONE_Y = 2 + PATH_OFFSET_Y;
export const CIRCLE_ROW_TWO_Y = 115 + PATH_OFFSET_Y;
export const CIRCLE_ROW_THREE_Y = 230 + PATH_OFFSET_Y;
export const CIRCLE_ROW_FOUR_Y = 340 + PATH_OFFSET_Y;
export const CIRCLE_ROW_FIVE_Y = 455 + PATH_OFFSET_Y;

// 第1个节点
export const CIRCLE_ONE_X = COLUMN_ONE_X;
export const CIRCLE_ONE_Y = CIRCLE_ROW_ONE_Y;
// 第2个节点
export const CIRCLE_TWO_X = COLUMN_TWO_X;
export const CIRCLE_TWO_Y = CIRCLE_ROW_ONE_Y;
// 第3个节点
export const CIRCLE_THREE_X = COLUMN_TWO_X;
export const CIRCLE_THREE_Y = CIRCLE_ROW_TWO_Y;
// 第4个节点
export const CIRCLE_FOUR_X = COLUMN_ONE_X;
export const CIRCLE_FOUR_Y = CIRCLE_ROW_TWO_Y;
// 第5个节点
export const CIRCLE_FIVE_X = COLUMN_ONE_X;
export const CIRCLE_FIVE_Y = CIRCLE_ROW_THREE_Y;
// 第6个节点
export const CIRCLE_SIX_X = COLUMN_TWO_X;
export const CIRCLE_SIX_Y = CIRCLE_ROW_THREE_Y;
// 第7个节点
export const CIRCLE_SEVEN_X = COLUMN_TWO_X;
export const CIRCLE_SEVEN_Y = CIRCLE_ROW_FOUR_Y;
// 第8个节点
export const CIRCLE_EIGHT_X = COLUMN_ONE_X;
export const CIRCLE_EIGHT_Y = CIRCLE_ROW_FOUR_Y;
// 第9个节点
export const CIRCLE_NINE_X = COLUMN_ONE_X;
export const CIRCLE_NINE_Y = CIRCLE_ROW_FIVE_Y;

export const TEXT_WIDTH = 300;
export const TEXT_HEIGHT = '100%';

export const CIRCLE_LIST: Array<MobileRoadMapNS.CircleNode> = [
    {
        x: CIRCLE_ONE_X,
        y: CIRCLE_ONE_Y,
    },
    {
        x: CIRCLE_TWO_X,
        y: CIRCLE_TWO_Y,

    },
    {
        x: CIRCLE_THREE_X,
        y: CIRCLE_THREE_Y,
    },
    {
        x: CIRCLE_FOUR_X,
        y: CIRCLE_FOUR_Y,
    },
    {
        x: CIRCLE_FIVE_X,
        y: CIRCLE_FIVE_Y,

    },
    {
        x: CIRCLE_SIX_X,
        y: CIRCLE_SIX_Y,
    },
    {
        x: CIRCLE_SEVEN_X,
        y: CIRCLE_SEVEN_Y,
    },
    {
        x: CIRCLE_EIGHT_X,
        y: CIRCLE_EIGHT_Y,
    },
    {
        x: CIRCLE_NINE_X,
        y: CIRCLE_NINE_Y,
    },
]
