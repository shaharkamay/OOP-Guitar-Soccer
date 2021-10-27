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

class BassGuitar extends ClassicGuitar {
    constructor(
        manufactureYear,
        brand,
        price,
        numberOfString = 4,
        id
    ) {
        super(
            manufactureYear,
            brand,
            price,
            numberOfString,
            id
        );
    }

    play() {
        this.price *= 0.9;
        this.used = true;
        return '🔊🔊🔊';
    }
    
    playSolo() {
        let tune = '';
        const chords = ['💥', '🤘', '🎵', '📢', '💢', '🕺'];
        while(chords.length > 0) {
            const rand = Math.floor(Math.random() * chords.length); // generates a number between 0 to chords.length includes.
            tune += chords.splice(rand, 1)[0];
        }
        return tune;
    }
}




