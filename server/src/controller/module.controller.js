const Module = require('../model/module.model');
const paths = require ('./path.controller');

exports.findAll = (req, res) => {
  Module.find()
    .then((modules) => { res.send(modules); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.create = (req, res) => {
  const newModule = new Module(req.body);
  newModule
    .save()
    .then((data) => { 
      const {pathId} = req.params;
      if (pathId) await paths.addModuleToPath(pathId, createModule._id)
            res.send(data); 
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.destroy = (req, res) => {
  Module.findOneAndDelete({ _id: req.params.id })
  .then((data) => { res.send(data); })
  .catch((err) => {
    res.status(500).send({
      message: err.message
    });
  });
};

exports.update = (req, res) => {
    Module.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => { res.send(data); })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
};
