const axios = require('axios')

axios.defaults.timeout = 20000

const BalabobaService = {
  getText: async (query, filter = 0) => {
    try {
      const response = await axios.post('https://yandex.ru/lab/api/yalm/text3', {
        query,
        filter,
        intro: 6,
      });
      if(response?.data?.bad_query || response?.data?.error)
        return "Чуваки из яндекса не хотят, чтобы я говорил об этом.";
      if(response.status !== 200)
        return
      return query + " " + response.data.text
    } catch (ex) {
      console.error(ex)
    }
  }
}

module.exports = BalabobaService