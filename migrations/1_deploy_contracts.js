const BorealisswapV2Router02 = artifacts.require("BorealisswapV2Router02");

const { config } = require('./migration-config');

module.exports = function (deployer, network) {
  deployer.deploy(BorealisswapV2Router02, config[network].factoryAddress, config[network].WETHAddress);
};
