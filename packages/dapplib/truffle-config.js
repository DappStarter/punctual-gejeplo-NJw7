require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remain uncover heavy clog brand teach'; 
let testAccounts = [
"0x6eae2636ffdfb0ead2b221f162fe1f880dc56ee21f434773352da6bbb4d04300",
"0xe83e3f06075701f6c2968af5f9a931f445c87a0efa54e55a057295ba77c0e8db",
"0xc0ee7bf906393344485c47945ad16e504b7f0c08a417d1c88f6213c43b54304a",
"0x5984d19ce5de1ba9d0564634754cfd5b2fa26f5714cb269bb9d7a38dc3860190",
"0xbd44bd900f8dd5c570ff95faf2002b99189d6f3e18e77196e972a6366d02ef02",
"0x0300a691690f648135ec80d72c0c8f9392e23de2e09d1545aa46013fdcc94aac",
"0xbfceb0e7ab9a40124d0d7ac0faea92eaabb81f608ff9e6514f53fbca814c08a3",
"0xfd22373f5e423c5a3fd18d19af7f4346602a2730a3809667ce8bcc9b05a6c6fe",
"0xf399e0deee2d98a6b60a70bf90f0c28c1cc742994efd4d47269d41e4c164e1bc",
"0x1d3276b49e797949b675ff98039be2809a37c2cd7ddaafb48608636c05b3d7f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

