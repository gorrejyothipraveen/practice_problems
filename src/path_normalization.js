const CURRENT_DIR = ".";
const PARENT_DIR = "..";

export const pathNormalizer = (path) => {
  const namesAndCommands = path.split(/\/+/);
  namesAndCommands.shift();
  const result = namesAndCommands.reduce((stack, member) => {
    if (member === PARENT_DIR && stack.length !== 0) stack.pop();
    if (member !== CURRENT_DIR && member !== PARENT_DIR) stack.push(member);
    return [...stack];
  }, []);

  if (result[result.length - 1] === "") result.pop();
  return result.join("/");
};

export const resolvePath = (path) => {
  const resolvedPath = "/" + pathNormalizer(path);
  return resolvedPath;
};
