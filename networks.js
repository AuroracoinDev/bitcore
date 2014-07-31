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
    hash: buffertools.reverse(hex('2A8E100939494904AF825B488596DDD536B3A96226AD02E0F7AB7AE472B27A8E')),
    merkle_root: buffertools.reverse(hex('8957E5E8D2F0E90C42E739EC62FCC5DD21064852DA64B6528EBD46567F222169')),
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
    hash: buffertools.reverse(hex('F423FE8EB935851F4BAA40CFEB7120D84BE32ADF7876ABF0FD293358A90F27A0')),
    merkle_root: buffertools.reverse(hex('6921227F5646BD8E52B664DA52480621DDC5FC62EC39E7420CE9F0D2E8E55789')),
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
