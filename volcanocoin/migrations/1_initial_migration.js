const Migrations = artifacts.require("Migrations");
const Box = artifacts.require('Box');
const Volcanocoin = artifacts,require('Volcanocoin');


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Box);
  deployer.deploy(Volcanocoin);
};
