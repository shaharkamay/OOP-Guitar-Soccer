class ClassicGuitar {
    constructor(
        manufactureYear,
        brand,
        price,
        numberOfString,
        used,
        id
    ) {
        this.manufactureYear = manufactureYear;
        this.brand = brand;
        this.price = price;
        this.numberOfString = numberOfString;
        this.used = used;
        this.id = id;
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