var Comment = require('./comment.model');

//GET
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

//DELETE 
exports.destroy = function(req, res) {
  Comment.findById(req.params.id, function (err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500,err);
}
