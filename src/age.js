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

    earthAgeToJupiterAge() {
        let jupiterAge = Math.floor(this.earthAge /11.86 );
        return jupiterAge;
    }

    earthYearsLeft() {
        let remainder = Math.floor(79 - this.earthAge)
        if (remainder === 1) return `You have exactly 1 year left! Use it wisely`;
        else if (remainder > 0) return `You have ${remainder} years left in your life, use it wisely`;
        else if (!remainder) return `According to my calculations, you are at right at the life expectancy of an average person in the USA`;
        else if (remainder === -1) return `You are exactly 1 year over the average life expectancy in the USA`
        else if (remainder < 0) {
            remainder = Math.abs(remainder);
            return `Wow you are ${remainder} years over the average life expectancy in the USA`;
        }
    }
}