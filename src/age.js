export class Age {
    constructor(earthYears) {
        this.earthAge = earthYears;
    }

    earthAgeToSeconds() {
        let seconds = this.earthAge * 31556900;
        return seconds;
    };

    earthAgeToMercuryAge() {
        let mercuryAge = Math.floor(this.earthAge/0.24);
        return mercuryAge;
    }

    earthAgeToVenusAge() {
        let venusAge = Math.floor(this.earthAge /0.62 );
        return venusAge;
    }

    earthAgeToMarsAge() {
        let marsAge = Math.floor(this.earthAge /1.88 );
        return marsAge;
    }
}