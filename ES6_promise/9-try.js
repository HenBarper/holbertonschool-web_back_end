export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const retVal = mathFunction();
    queue.push(retVal);
  } catch (error) {
    queue.push(error);
  }
  queue.push('Guardrail was processed');
  return queue;
}
