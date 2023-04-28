class UberPriceCalculator {
  constructor(distance, rideType) {
    this.distance = distance;
    this.rideType = rideType;
  }

  calculatePrice() {
    const baseFare = 2.50;
    const perMileFare = 1.50;
    let rideFare;

    switch (this.rideType) {
      case 'UberX':
        rideFare = 1.0;
        break;
      case 'UberXL':
        rideFare = 1.5;
        break;
      case 'UberBlack':
        rideFare = 3.0;
        break;
      default:
        throw new Error('Invalid ride type.');
    }

    const totalFare = baseFare + (this.distance * perMileFare * rideFare);
    return totalFare.toFixed(2);
  }
}
const calculator = new UberPriceCalculator(10, 'UberX');
const price = calculator.calculatePrice();
console.log(price); // Output: "17.50"
