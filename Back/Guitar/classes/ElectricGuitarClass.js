import { ClassicGuitar } from './ClassicGuiterClass.js';

class ElectricGuitar extends ClassicGuitar {
    constructor(
        manufactureYear,
        brand,
        price,
        numberOfString = 6,
        id,
        longNeck
    ) {
        super(
            manufactureYear,
            brand,
            price,
            numberOfString,
            id,
        );
        this.longNeck = longNeck;
    }

    play() {
        this.price *= 0.9;
        this.used = true;
        return '🎸🎸🎸';
    }
}

const electric =  new ElectricGuitar(2010, "volvo", 250, undefined, 17, true);
console.log(electric.play());