const Blockchain = require("./blockchain");
const blockchain = new Blockchain();

blockchain.addBlock({ data: "new data" });

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, averageTime;
let times = [];

for (let i = 0; i < 1000; i++) {
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;
  blockchain.addBlock({ data: `block ${1}` });
  nextBlock = blockchain.chain[blockchain.chain.length - 1];
  nextTimestamp = nextBlock.timestamp;

  timeDiff = nextTimestamp - prevTimestamp;
  times.push(timeDiff);

  averageTime = times.reduce((total, num) => total + num) / times.length;
  console.log(
    `Time to mine block: ${timeDiff} , Difficulty:${nextBlock.difficulty} , Average time :${averageTime}`
  );
}
