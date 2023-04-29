const locked = 1;
const unlocked = 0;

export class Mutex {
  #sab;
  #ta;

  constructor(sab) {
    this.#sab = sab || new SharedArrayBuffer(4);
    this.#ta = new Int32Array(this.#sab);
  }

  lock() {
    while (true) {
      if (Atomics.compareExchange(this.#ta, 0, unlocked, locked) === unlocked) {
        return;
      }
      Atomics.wait(this.#ta, 0, locked);
    }
  }

  unlock() {
    if (Atomics.compareExchange(this.#ta, 0, locked, unlocked) !== locked) {
      throw new Error("Mutex is in inconsistent state: unlock on unlocked Mutex.");
    }
    Atomics.notify(this.#ta, 0, 1);
  }
}
