class DynamicArray {
  constructor(size = 4) {
    this.capacity= size;
    this.data = new Array(size);
    this.length = 0;
  }

  read(index) {
    return (index >= this.length ? undefined : this.data[index]);
  }

  push(val) {
    if (this.length < this.capacity) {
      this.data[this.length] = val;
    } else {
      this.capacity *= 2;
      let temp = new Array(this.capacity);
      for (let i = 0; i < this.length; i++) {
        temp[i] = this.data[i];
      }
      temp[this.length] = val;
      this.data = temp;
    }
    this.length++;
  }


  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.data[this.length - 1];
    this.length--;
    return temp;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    if (this.length < this.capacity) {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
    } else {
      this.capacity *= 2;
      let temp = new Array(this.capacity);
      for (let i = 0; i < this.length; i++) {
        temp[i + 1] = this.data[i];
      }
      this.data = temp;
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (val === this.data[i]) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity *= 2;
    let temp = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      temp[i] = this.data[i];
    }
    this.data = temp;
  }

}


module.exports = DynamicArray;