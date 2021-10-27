export { ClassicGuitar };

class ClassicGuitar {
    #id; //private
    constructor(
        manufactureYear,
        brand,
        price,
        numberOfString = 6,
        id
    ) {
        this.manufactureYear = manufactureYear;
        this.brand = brand;
        this.price = price;
        this.numberOfString = numberOfString;
        this.used = false;
        this.#id = id;
    }

    play() {
        this.price *= 0.9;
        this.used = true;
        return '🎶🎶🎶';
    }

    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }

    get getManufactureYear() {
        return this.manufactureYear;
    }
    
    get getBrand() {
        return this.brand;
    }

    get getId() {
        return this.id;
    }

    static detectSound(sound) {
        return sound === '🎸' ? 'ElectricGuitar' : sound === '🔊' ? 'BassGuitar' : null;
    }
}

const classic = new ClassicGuitar(1999, 'as', 120, 5, 4);
console.log(classic.play());