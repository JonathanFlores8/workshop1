// metrics.js
import fs from 'fs/promises';

const fileName = 'metrics.js';

export async function reader() {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function lineCounter() {
  const data = await reader();
  if (data === null) {
    return null;
  }
  return data.split('\n').length;
}

export async function conditionCounter() {
    const data = await reader();
    
    const conditions = ['if', 'else', 'switch', 'while', 'for'];
    let count = 0;
  
    // Remove all strings in double and single quotes
    const dataWithoutStrings = data.replace(/"([^"\\]*(\\.[^"\\]*)*)"|'([^'\\]*(\\.[^'\\]*)*)'/g, '');
  
    for (const condition of conditions) {
      const regex = new RegExp(`\\b${condition}\\b`, 'g');
      const matches = dataWithoutStrings.match(regex);
      if (matches) {
        count += matches.length;
      }
    }
  
    return count;
  }

  export async function funcCounter() {
    const data = await reader()
    
    if (data === null)  {
      return null;
    }
    return (data.match(/\bfunction\b/g) || []).length;
  }

  export async function variableCounter() {
    const data = await reader()
    if (data === null)  {
      return null;
    }
    return (data.match(/\bvariable\b/g) || []).length;
  }


  



