const fetch = require('node-fetch');

function handleError(error) {
  throw new Error(error.message);
}

async function checkStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async url => {
          const res = await fetch(url)
          return res.status;
    }))
    return arrayStatus;
  } catch(erro) {
    handleError(erro);
  }
}

function generateUrlArray(arrayLinks) {
  return arrayLinks
    .map(objectLink => Object
      .values(objectLink).join());
}

async function validateURLs(arrayLinks) {
  const links = generateUrlArray(arrayLinks);
  const statusLinks = await checkStatus(links);
  
  const result = arrayLinks.map((object, index) => ({
    ...object,
    status: statusLinks[index]
  }))
  return result;
}

module.exports = validateURLs;