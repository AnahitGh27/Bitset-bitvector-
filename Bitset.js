class Bitset {
    #bitVector;
    #index;
    #intSize = 32;
    #bits;

    constructor(bits) {
        this.createVector(bits);
    }

    createVector(bits) 
    {
        if (bits <= 0) { throw `Enter positive integer`; }
        if (bits > this.#intSize) {
            this.#bitVector = new Uint32Array(Math.ceil(bits / this.#intSize));
        } else {
            this.#bitVector = new Uint32Array(1);
        }
        this.#bits = bits;
    }

    setBit(position) 
    {
        if (position >= this.#bits) { throw `out of range`; }
        this.#index = Math.floor(position / this.#intSize);
        this.#bitVector[this.#index] |= (1 << position % this.#intSize); 
    } 

    resetBit(position) 
    {
        if (position >= this.#bits) { throw `out of range`; }
        this.#index = Math.floor(position / this.#intSize);
        this.#bitVector[this.#index] &= (~(1 << position % this.#intSize)); 
    }
}
