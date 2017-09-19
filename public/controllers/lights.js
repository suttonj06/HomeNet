const db = require('./databaseInfo.json');

var searchID = function(id) {
  for(var i = 0; i < db.length; i++) {
    if(db[i].id === id*1) {
      var position = i;
      i = db.length + 1;
      return db[position];
    }
  }
  return false;
}

exports.id = function(req, res, next, param) {
  if( (req.recepticle = searchID(param*1)) != false) {
    console.log("Item is found in the database");
  }
  else {
    console.log("Item is not found in the database");
    return res.sendStatus(404);
  }
  next();
}

exports.get = function(req, res, next) {
  if(req.recepticle) {
    if(!Number.isInteger(req.recepticle.id)) {
      return res.sendStatus(400);
    }
    if(req.query.level) {
      var level = req.query.level;
      console.log("Light turned on level " + level);
      return res.send("item " + req.recepticle.id + " is on level " + level);
    }

    return res.send(req.recepticle);
  }

  res.sendStatus(404);
}

exports.list = function(req, res, next) {
  res.send(db);
}

exports.new = function(req, res, next) {
  res.send({});
}

exports.update = function(req, res, next) {
  if(!req.recepticle) return res.sendStatus(404);

  res.send({});
}

exports.delete = function(req, res, next) {
  if(!req.recepticle) return res.sendStatus(404);

  res.sendStatus(200);
}
