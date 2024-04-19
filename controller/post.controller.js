var request = require('request');

//Get post by Id
const findPostById = async (req, res) => {
  var id = req.params.id;
  // console.log(id);
  var apiUrl = `https://jsonplaceholder.typicode.com/posts?id=${id}`;
  var options = {
    'method': 'GET',
    'url': apiUrl,
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) { 
      return res.status(response.statusCode).json({ message: 'Error fetching post data' }); 
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

//create post
const createPost = async( req, res) => {
  var bodyReq = req.body;
  var apiUrl = `https://jsonplaceholder.typicode.com/posts`;
  var options = {
    'method': 'POST',
    'url': apiUrl,
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyReq)
  };
  request(options, function (error, response) {
    if (error) { 
      return res.status(response.statusCode).json({ message: 'Error to create post data' }); 
    }
    if (response.statusCode === 201) {
      // Parse the response body (assuming JSON format)
      const data = JSON.parse(response.body);
      res.status(201).json(data);
    } else {
      res.status(response.statusCode).json({ message: 'API call failed' });
    }
  });
}

// Update a post by post id
const updatePost = async (req, res) => {
  var id = req.params.id;
   var requestBody = req.body;
   var apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
   var options = {
    'method': 'PUT',
    'url': apiUrl,
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
   }
   request(options, function (error, response) {
    if (error) { 
      return res.status(response.statusCode).json({ message: 'Error to update data' }); 
    }
    if (response.statusCode === 200) {
      // Parse the response body (assuming JSON format)
      const data = JSON.parse(response.body);
      res.status(200).json(data);
    } else {
      res.status(response.statusCode).json({ message: 'API call failed' });
    }
  });
};

//delet a post
const deletePost = async (req, res) => {
  var id = req.params.id;
  var apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
  var options = {
    'method': 'DELETE',
    'url': apiUrl
  }
  request(options, function (error, response) {
    if (error) { 
      return res.status(response.statusCode).json({ message: 'Error deleting post data' }); 
    }
    if (response.statusCode === 200) {
      // Parse the response body (assuming JSON format)
      const data = JSON.parse(response.body);
      res.status(200).json(data);
    } else {
      res.status(response.statusCode).json({ message: 'API call failed' });
    }
  });
};

module.exports = {
  findPostById,
  createPost,
  updatePost,
  deletePost
}