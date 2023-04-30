export namespace RoadMapNS {
    export type RoadMapNodes = Omit<CircleBoxProps, 'x' | 'y' | 'color'> & {
        circleColor?: string;
    };

    export interface RoadMapProps {
        nodes: Array<RoadMapNodes>;
        startColor?: string;
        endColor?: string;
    }

    export interface RoadMapBoxProps extends RoadMapProps {
        title?: string;
        tip?: string;
    }

    export type CircleBoxNode = Omit<CircleBoxProps, 'x' | 'y'>;

    export type CircleBoxProps = {
        x: number;
        y: number;
        title: string;
        year: string;
        desc?: string;
        color?: string;
        yearColor?: string;
        passed?: boolean;
        passedColor?: string;
    };

    export type CircleNode = {
        x: number;
        y: number;
    }
}