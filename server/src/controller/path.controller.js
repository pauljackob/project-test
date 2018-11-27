const Path = require('../model/path.model');
const Module = require('../model/module.model');
const mongoose = require('mongoose');

exports.findAll = (req, res) => {
  Path.
  find()
    .then((modules) => { res.send(modules); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findOne = (req, res) => {
    Path.
    findById(req.params.pathId)
    populate('module')
      .then((path) => { res.send(path); })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
  };

exports.create = (req, res) => {
  const newPath = new Path(req.body);
  newPath
    .save()
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.destroy = (req, res) => {
  Path.findOneAndDelete({ _id: req.params.id })
  .then((data) => { res.send(data); })
  .catch((err) => {
    res.status(500).send({
      message: err.message
    });
  });
};

exports.update = (req, res) => {
    Path.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};
