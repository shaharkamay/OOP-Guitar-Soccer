import { ClassicGuitar } from './ClassicGuiterClass.js';

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

const bass =  new BassGuitar(2010,"volvo", 250 ,undefined, 17);
console.log(bass.play());
console.log(bass.playSolo());
