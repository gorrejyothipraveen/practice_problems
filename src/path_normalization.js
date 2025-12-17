const CURRENT_DIR = '.';
const PARENT_DIR = '..';

export const pathNormalizer = (path) => {
  const instructionsAndCommands = path.split(/\/+/);
  instructionsAndCommands.shift()
  const result = instructionsAndCommands.reduce((stack, instruction) => {
    if (instruction === PARENT_DIR && stack.length !== 0) {
      stack.pop();
    }
    if (instruction !== CURRENT_DIR && instruction !== PARENT_DIR) {
      stack.push(instruction);
    }
    return [...stack];
  }, []);

  return result.join("/");
};

export const resolvePath = (path) => {
  const resolvedPath =  '/' + pathNormalizer(path);
  return resolvedPath;
};
