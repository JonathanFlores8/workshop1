// app.js
import { conditionCounter, funcCounter, lineCounter, variableCounter } from './metrics.js';

async function main() {
  const lines = await lineCounter()
  console.log(`Number of lines in the file: ${lines}`)

  const conditions = await conditionCounter()
  console.log(`Number of condition-related keywords: ${conditions}`)

  const functions = await funcCounter()
  console.log(`Number of functions in the file: ${functions}`);

  const varCounter = await variableCounter()
  console.log(varCounter);
}

main();
