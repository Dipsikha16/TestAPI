var request = require('request');

//Get user by id
const findUserById = async (req, res) => {
  var id = req.params.id;
  // console.log(id);
  var apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  var options = {
    'method': 'GET',
    'url': apiUrl,
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) { 
      return res.status(response.statusCode).json({ message: 'Error fetching data' }); 
    }
    if (response.statusCode === 200) {
      // Parse the response body (assuming JSON format)
      const data = JSON.parse(response.body);
      res.json(data);
    } else {
      res.status(response.statusCode).json({ message: 'API call failed' });
    }
  });
}
const test = async (req, res) => {
  return res.status(200).json({ message: 'Hello' });
}

module.exports = {
  findUserById,
  test
}