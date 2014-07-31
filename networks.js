var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fda4dc6c'),
  addressVersion: 0x17,
  privKeyVersion: 151,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('2a8e100939494904af825b488596ddd536b3a96226ad02e0f7ab7ae472b27a8e'),
    merkle_root: hex('8957e5e8d2f0e90c42e739ec62fcc5dd21064852da64b6528ebd46567f222169'),
    height: 0,
    nonce: 538548,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1390598806,
    bits: 504365055,
  },
  dnsSeeds: [
    'seed.aur.co.vu'
  ],
  defaultClientPort: 12340
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('ebb0a6cb'),
  addressVersion: 0x41,
  privKeyVersion: 193,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('f423fe8eb935851f4baa40cfeb7120d84be32adf7876abf0fd293358a90f27a0'),
    merkle_root: hex('6921227F5646BD8E52B664DA52480621DDC5FC62EC39E7420CE9F0D2E8E55789'),
    height: 0,
    nonce: 2543986232,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1396273344,
    bits: 504365055,
  },
  dnsSeeds: [
    'testnet-seed.aur.co.vu'
  ],
  defaultClientPort: 19117
};
