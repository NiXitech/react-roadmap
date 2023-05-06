import { RoadMapNS } from "./type";

export const CIRCLE_R = 19;
export const CIRCLE_ROW_ONE_Y = 0;
export const CIRCLE_ROW_TWO_Y = 240;
export const CIRCLE_ROW_THREE_Y = 480;
export const CIRCLE_COLOR = '#FFFFFF';
export const CIRCLE_CURRENT_COLOR = '#FFD35B';
export const CIRCLE_PASSED_COLOR = '#51B843';

export const PASSED_COLOR = '#FFFFFF';

export const TEXT_COLOR = '#FFFFFF';
export const TEXT_YEAR_PASSED_COLOR = '#51B843';
export const TEXT_YEAR_COLOR = '#FFFFFF';

export const TEXT_YEAR_FONT_SIZE = 28;

export const TEXT_TITLE_FONT_SIZE = 24;

export const TEXT_DESC_FONT_SIZE = 18;

export const TEXT_YEAR_Y_OFFSET = 65;
export const TEXT_Y_OFFSET = 30;

export const TEXT_WIDTH = 300;
export const TEXT_DESC_WIDTH = 300;
export const TEXT_HEIGHT = '100%';

export const COLUMN_ONE_X = 595;
export const COLUMN_TWO_X = 975;
export const COLUMN_THREE_X = 1340;

export const SVG_WIDTH = 1920;
export const SVG_HEIGHT = 588;

// 第1个节点
export const CIRCLE_ONE_X = COLUMN_ONE_X;
export const CIRCLE_ONE_Y = CIRCLE_ROW_ONE_Y;
// 第2个节点
export const CIRCLE_TWO_X = COLUMN_TWO_X;
export const CIRCLE_TWO_Y = CIRCLE_ROW_ONE_Y;
// 第3个节点
export const CIRCLE_THREE_X = COLUMN_THREE_X;
export const CIRCLE_THREE_Y = CIRCLE_ROW_ONE_Y;
// 第4个节点
export const CIRCLE_FOUR_X = COLUMN_THREE_X;
export const CIRCLE_FOUR_Y = CIRCLE_ROW_TWO_Y;
// 第5个节点
export const CIRCLE_FIVE_X = COLUMN_TWO_X;
export const CIRCLE_FIVE_Y = CIRCLE_ROW_TWO_Y;
// 第6个节点
export const CIRCLE_SIX_X = COLUMN_ONE_X;
export const CIRCLE_SIX_Y = CIRCLE_ROW_TWO_Y;
// 第7个节点
export const CIRCLE_SEVEN_X = COLUMN_ONE_X;
export const CIRCLE_SEVEN_Y = CIRCLE_ROW_THREE_Y;
// 第8个节点
export const CIRCLE_EIGHT_X = COLUMN_TWO_X;
export const CIRCLE_EIGHT_Y = CIRCLE_ROW_THREE_Y;
// 第9个节点
export const CIRCLE_NINE_X = COLUMN_THREE_X;
export const CIRCLE_NINE_Y = CIRCLE_ROW_THREE_Y;

export const CIRCLE_LIST: Array<RoadMapNS.CircleNode> = [
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