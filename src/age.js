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
}