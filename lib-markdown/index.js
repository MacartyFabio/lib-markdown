const chalk = require('chalk');
const fs = require('fs');

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResults = [];
  let temp;
  while((temp = regex.exec(text)) !== null) {
    arrayResults.push({ [temp[1]]: temp[2] })
  }
  return arrayResults.length === 0 ? 'don´t have links' : arrayResults;
}

function handleError(error) {
  throw new Error(chalk.red(error.code, 'don´t have files in the directory'));
}

async function getFile(filepath) {
  const encoding = 'utf-8'

  try {
  
    const text = await fs.promises.readFile(filepath, encoding)
    return extractLinks(text);
  } catch(error) {
    handleError(error);
  }
}

module.exports = getFile;