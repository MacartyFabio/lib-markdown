const chalk = require('chalk');
const getFiles = require('./index');
const validateURLs = require('./http-validate');

const filepath = process.argv;

async function processText(filepath) {
  const result = await getFiles(filepath[2]);
  if (filepath[3] === 'validate') {
    console.log(chalk.yellow('validate links'), await validateURLs(result));
  } else {
    console.log(chalk.yellow('list of links'), result);
  }
}

processText(filepath);