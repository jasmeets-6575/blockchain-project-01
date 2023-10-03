class Block {
  constructor({ timestamp, prevHash, hash, data }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block({
  timestamp: "2/9/12",
  prevHash: "0xavc",
  hash: "0xadf",
  data: "hello",
});
console.log(block1);
