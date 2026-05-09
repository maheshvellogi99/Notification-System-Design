export const frontendLog = (
  stack: string,
  level: string,
  packageName: string,
  message: string
) => {
  console.log({
    stack,
    level,
    package: packageName,
    message
  });
};