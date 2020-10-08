import { selectNodeByName } from '../node/node.selector';
import { selectEdge } from './edge.selector';

const createEdge = async (models, connections, boardId) => {
  const result = [];
  await Promise.all(connections.map(async (node) => {
    const {
      name: fromNodeName,
      to: toNodeNames,
    } = node;
    const { id: fromNodeId } = await selectNodeByName(models, fromNodeName);
    await Promise.all(toNodeNames.map(async (toNodeName) => {
      const { id: toNodeId } = await selectNodeByName(models, toNodeName);
      const edge = await selectEdge(models).create({
        name: `${fromNodeName}->${toNodeName}`,
        fromNodeId,
        toNodeId,
        boardId,
      });
      result.push(edge);
    }));
  }));
  return result;
};

export default createEdge;
