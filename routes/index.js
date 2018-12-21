var express = require('express');
var validUrl = require("valid-url");
var mongoose = require('mongoose');
var errorUrl = '/error';
var shortCode = require("../middlewares/uniqueUrlCode");

var app = express.app();
var model = mongoose.model("BlairWitchSchema");

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/api/item/:code', async (req, res) => {
  var urlCode = req.params.code;
  const item = await model.findOne({ urlCode: urlCode });

  if (item)
    return res.redirect(item.originalUrl);
  else
    return res.redirect(errorUrl);
});

app.post('/api/item', async (req, res) => {
  var { originalUrl, shortBaseUrl } = req.body;

  if (validUrl.isUri(shortBaseUrl)) {}
  else
    return res.status(401).json("Invalid Base URL");

  var urlCode = shortCode.generate();
  var updatedOn = new Date();

  if (validUrl.isUri(originalUrl)) {
    try {
      var item = await model.findOne({ originalUrl: originalUrl });
      if (item)
        return res.status(200).json(item);
      else {
        var shortUrl = shortBaseUrl + "/" + urlCode;
        var item = new model({
          originalUrl,
          shortUrl,
          urlCode,
          updatedOn
        });
        await item.save();
        res.status(200).json(item);
      }
    } catch (error) {
      res.status(401).json("Invalid User Id");
    }
  } else
      return res.status(401).json("Invalid User Id");;
});

module.exports = app;
