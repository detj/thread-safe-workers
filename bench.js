import { exec as execCB } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execCB);

function run({ count = 1000, outfile = "output.txt" } = {}) {
  return exec(`seq ${count} | xargs -I -- node index > ${outfile}`);
}

await Promise.all([
  run({ outfile: "output1.txt" }),
  run({ outfile: "output2.txt" }),
  run({ outfile: "output3.txt" }),
  run({ outfile: "output4.txt" }),
  run({ outfile: "output5.txt" }),
]);

await exec(`cat output1.txt output2.txt output3.txt output4.txt output5.txt > output.txt`);
