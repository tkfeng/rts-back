import { selectNodeType } from './nodeType.selector';

const createNodeType = async (models, nodeType) => {
  const result = await selectNodeType(models).create(nodeType);
  return result;
};

export default createNodeType;
