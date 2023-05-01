import assert from "node:assert/strict";
import test from "node:test";

import { exec as execCB } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execCB);

const { stdout } = await exec(`cat output.txt | grep 130 | wc -l`);

test("counts are consistent across mutiple threads", () => {
  assert.strictEqual(stdout, "5000\n");
});
