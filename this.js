const car = {
  brand: "Audi",
  print() {
    return this.brand;
  }
};

const func = function() {
  console.log(this.brand);
};

func.call(car);

