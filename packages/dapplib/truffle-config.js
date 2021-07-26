require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remember social imitate problem sword two'; 
let testAccounts = [
"0x6cfbc00154a60d13bc41c28b7fa31a11bdda517f05afd0f78533e5b458ff4c68",
"0xb3f0eb364d94823a7fcdfe8f72d414c01e9a842a00c17c0a27a5ac58d4747c8d",
"0x9a0741442ead30475e050d122eaec70746521f921d3dde1a3682c4b2823bf0eb",
"0x858bf5c13e8a437689534ea6edf0ae031cfb279ae8b74ada451fd1e5f09db685",
"0x0db615495d4aa015cf426680b0de1aced0ccb0d878e5a573b0b7b3c29b86d4e9",
"0xb9298d9ecef743c617ec56108ee347757d6c5a1c6e0a0ceb16d42077c68acf5a",
"0xfe76270f5d559ff279e155473f5e3f5db9a6469525b0eddc91e6eaced360c6ee",
"0xa92fb933d11974a688021bcaaf6b97dc6326d54fd36041a9dc151dcd16b61fc7",
"0xe372143d6ff369269a816efe60c3a61d9691f1731e5893cb72e575286f44b488",
"0xc910992684cdd47afd9499421590400a3b752be271fb615a186774f980cc9c85"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


