const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");
class Block {
  constructor({ timestamp, prevHash, hash, data }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }
  static genesis() {
    return new this(GENESIS_DATA);
  }
  static mineBlock({ prevBlock, data }) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    return new this({
      timestamp,
      prevHash,
      data,
      hash: cryptoHash(timestamp, prevHash, data),
    });
  }
}

const block1 = new Block({
  timestamp: "2/9/12",
  prevHash: "0xavc",
  hash: "0xadf",
  data: "hello",
});

const genesisBlock = Block.genesis;

const result = Block.mineBlock({ prevBlock: block1, data: "block2" });
console.log(result);
