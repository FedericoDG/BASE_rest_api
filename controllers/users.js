const { response } = require('express');

const usersGet = (req, res) => {
  res.json({
    msg: 'get API - Controlador'
  });
};

const usersPost = (req, res) => {
  res.json({
    msg: 'post API - Controlador'
  });
};

const usersPut = (req, res) => {
  res.json({
    msg: 'put API - Controlador'
  });
};

const usersDelete = (req, res) => {
  res.json({
    msg: 'delete API - Controlador'
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete
};