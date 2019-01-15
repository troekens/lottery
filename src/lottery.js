import web3 from './web3';

/*
Where do we find the info above ?
Within the lottery project. We have our "deploy.js" file in which we console.log :
console.log(interface);
console.log('Contract deployed to ', result.options.address);

Run : "node deploy.js" to find this info.

interface is our ABI;
address is result.options.address


*/
const address = '0x0e180f6de1e31C342B93714773C6EE1270823D2C';

const abi = [{
    "constant": true,
    "inputs": [],
    "name": "manager",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "pickWinner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getPlayers",
    "outputs": [{"name": "", "type": "address[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "enter",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "players",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}];


/*
This export a complete copy of our contract
We can work with it from our REACT code base
This is our portal/access to our contract that exist on the blockchain.
*/
export default new web3.eth.Contract(abi, address);