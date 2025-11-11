const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  const promises = urls.map(async (url) => {
    try {
      const response = await httpGet(url);
      const { message } = JSON.parse(response.body);

      return response.status === 200
        ? { 'Arnie Quote': message }
        : { FAILURE: message };
    } catch (error) {
      return { FAILURE: error.message };
    }
  });
  const results = await Promise.all(promises);
  return results;
};

module.exports = {
  getArnieQuotes,
};
