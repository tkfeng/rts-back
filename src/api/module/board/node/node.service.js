import { selectNode } from './node.selector';
import { selectNodeTypeByName } from '../nodeType/nodeType.selector';

const createNode = async (models, connections, boardId) => {
  const result = [];
  await Promise.all(connections.map(async (node) => {
    const {
      name,
      type,
    } = node;
    const nodeType = await selectNodeTypeByName(models, type);
    result.push(await selectNode(models).create({
      name,
      nodeTypeId: nodeType.id,
      boardId,
    }));
  }));

  return result;
};

export default createNode;
