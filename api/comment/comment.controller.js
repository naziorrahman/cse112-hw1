var Comment = require('./comment.model');

//Get
exports.index = function(req, res) {
  Comment.find(function(err,data){
    if(err) {return handleError(res,err); }
    return res.json(200, data);
  });
}


//POST
exports.create = function(req, res) {
  Comment.create(req.body, function(err, comment) {
    if(err) { return handleError(res, err); }
    return res.json(201, comment);
  });
};

function handleError(res, err) {
  return res.send(500,err);
}
