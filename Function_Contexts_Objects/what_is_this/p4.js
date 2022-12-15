let obj = {
  count: 2,
  method() {
    return this.count;
  },
};

console.log(obj.method());
