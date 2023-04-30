import { RoadMapNS } from "../pc";

type RoadMapNodes = RoadMapNS.RoadMapNodes;
type CircleBoxNode = RoadMapNS.CircleBoxNode;
type CircleBoxProps = RoadMapNS.CircleBoxProps;
type CircleNode = RoadMapNS.CircleNode

export const mapRoadMapNode2CircleBox = (nodes: RoadMapNodes): CircleBoxNode => {
    const {
        title,
        year,
        desc,
        circleColor,
        yearColor,
        passed,
    } = nodes;
    return {
        title,
        year,
        desc,
        color: circleColor,
        yearColor,
        passed
    };
}

export const getFinalNodes = (circleList: Array<CircleNode>, nodes: RoadMapNodes[]): Array<CircleBoxProps> => {
    return circleList.map((circle, index) => {
        const node = nodes[index];
        if (node) {
            return {
                ...mapRoadMapNode2CircleBox(node),
                ...circle,
            };
        }
    }) as Array<CircleBoxProps>
}

