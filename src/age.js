export class Age {
    constructor(earthYears) {
        this.earthAge = ageInYears;
    }
    earthAgeToSeconds() {
        let seconds = this.earthAge * 31556900;
        return seconds;
    };
};