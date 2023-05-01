[![Node.js CI](https://github.com/detj/thread-safe-workers/actions/workflows/node.js.yml/badge.svg)](https://github.com/detj/thread-safe-workers/actions/workflows/node.js.yml)

# thread safe workers

A thread-safe implementation of nodejs [worker threads](https://nodejs.org/dist/latest-v18.x/docs/api/worker_threads.html#portpostmessagevalue-transferlist) with Mutex locking implemented using [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) & [SharedArrayBuffer(s)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

## Run

Clone the repository and run

### One time

This will run the node process only once.

```sh
npm start
```

### Multipe times

To run the benchmark, run. Will invoke the single process multiple times, concurrently.

```sh
npm bench
```

This will create multiple `output-<n>.txt` files along with a final concatenated `output.txt` file.

## Results

The combined `output.txt` should contain 5000 entries all having the same final value of **130**.
