let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  let filtered = cars.filter((car) => {
    if (car.isAvailable === true) {
      return car;
    }
  });
  return filtered;
}
let result1 = getAvailableCars(cars);
console.log("BODLOGO-1---->", result1);

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  let mapped = cars.filter((car) => {
    if (car.year > 2018) {
      return car;
    }
  });
  return mapped;
}
let result2 = getAvailableCars(cars);
console.log("BODLOGO-2---->", result2);

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  let filterred = cars.filter((car) => {
    if (car.price > 35000000) {
      return car;
    }
  });
  return filterred;
}
let result3 = getExpensiveCars(cars);
console.log("BODLOGO-3---->", result3);

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars) {
  let filterred = cars.filter((car) => {
    if (car.type === "Sedan") {
      return car;
    }
  });
  return filterred;
}
let result4 = getSedans(cars);
console.log("BODLOGO-4---->", result4);

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brandName) {
  let filterred = cars.filter((car) => {
    if (car.brand === brandName) {
      return car;
    }
  });
  return filterred;
}
let result5 = filterByBrand(cars, "Hyundai");
console.log("BODLOG0-5---->", result5);

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let filterred = cars.filter((car) => {
    if (car.mileage > 100000) {
      return car;
    }
  });
  return filterred;
}
let result6 = getHighMileageCars(cars);
console.log("BODLOGO-6---->", result6);

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {}

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  let mapped = cars.map((car) => {
    return "car price", (car.price * 115) / 100;
  });
  return mapped;
}
let result8 = increaseCarPrices(cars);
console.log("BODLOGO-8---->", result8);

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let filterred = cars.filter((car) => {
    if (car.mileage < 50000) {
      return car;
    }
  });
  return filterred;
}
let result9 = getLowMileageCars(cars);
console.log("BODLOGO-9---->", result9);

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  cars.sort((car2, car1) => {
    return car2.fuelEfficiency - car1.fuelEfficiency;
  });
  return cars[0];
}
let result10 = getMostEfficientCar(cars);
console.log("BODLOGO-10---->", result10);

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  cars.sort((car2, car1) => {
    return car1.price - car2.price;
  });
  return cars[0];
}
let result11 = getMostExpensiveCar(cars);
console.log("BODLOGO-11---->", result11);

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let TotalMileage = 0;
  cars.map((car) => {
    return (TotalMileage = TotalMileage + car.mileage);
  });
  return TotalMileage;
}
let result12 = getTotalMileage(cars);
console.log("BODLOGO-12---->", result12);

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  let filterred = cars.filter((car) => {
    if (car.supplier === supplierName) {
      return car;
    }
  });
  return filterred;
}
let result13 = filterBySupplier(cars, "AutoJapan");
console.log("BODLOGO-13---->", result13);

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {}

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  cars.sort((car2, car1) => {
    return car2.price - car1.price;
  });
  return cars;
}
let result15 = sortByPriceAscending(cars);
console.log("BODLOGO-15---->", result15);

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let filterred = cars.filter((car) => {
    if (car.engineSize > 2.0) {
      return car;
    }
  });
  return filterred;
}
let result16 = getLargeEngineCars(cars);
console.log("BODLOGO-16---->", result16);

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  let arrSuppliers = cars.map((car) => {
    return car.brand;
  });
  let uniquebrand = [];
  arrSuppliers.forEach((brand) => {
    if (uniquebrand.includes(brand)) {
    } else {
      uniquebrand.push(brand);
    }
  });
  return uniquebrand;
}
let result17 = getUniqueBrands(cars);
console.log("BODLOGO-17---->", result17);

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let mapped = cars.map((car) => {
    return {
      model: car.model,
      year: car.year,
    };
  });
  return mapped;
}
let result18 = getModelAndYearList(cars);
console.log("BODLOGO-18---->", result18);

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  // ...
}

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  // ...
}
