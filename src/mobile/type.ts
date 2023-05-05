export namespace MobileRoadMapNS {
    export type RoadMapNodes = Omit<CircleBoxProps, 'x' | 'y' | 'color'> & {
        circleColor?: string;
    };

    export interface RoadMapProps {
        nodes: Array<RoadMapNodes>;
        startColor?: string;
        endColor?: string;
        aosData?: string;
        className?: string;
    }

    export interface RoadMapBoxProps extends RoadMapProps {
        title?: string;
        tip?: string;
        titleClassName?: string;
        footerClassName?: string;
        roadMapClassName?: string;
    }

    export type CircleBoxNode = Omit<CircleBoxProps, 'x' | 'y'>;

    export type CircleBoxProps = {
        x: number;
        y: number;
        title: string;
        year: string;
        color?: string;
        yearColor?: string;
        passed?: boolean;
        passedColor?: string;
        titleFontSize?: number;
        yearFontSize?: number;
    }

    export type CircleNode = {
        x: number;
        y: number;
    }
}