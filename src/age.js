export class Age {
    constructor(earthYears) {
        this.earthAge = earthYears;
    }
    earthAgeToSeconds() {
        let seconds = this.earthAge * 31556900;
        return seconds;
    };
}