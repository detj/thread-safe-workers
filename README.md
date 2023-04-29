# thread safe workers

A thread-safe implementation of nodejs [worker threads](https://nodejs.org/dist/latest-v18.x/docs/api/worker_threads.html#portpostmessagevalue-transferlist) with Mutex locking implemented using [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) & [SharedArrayBuffer(s)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer).

## Run

Clone the repository and run

```sh
node index
```

To run the benchmark, run

```sh
./bench.sh
```

This will create multiple `output-<n>.txt` files along with a final concatenated `output.txt` file.

## Results

The combined `output.txt` should contain 5000 entries all having the same final value of **130**.
