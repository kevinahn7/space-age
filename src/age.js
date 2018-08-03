export class Age {
    constructor(earthYears) {
        this.earthAge = earthYears;
        this.dayOfYear = 0;
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

    // secondsDifferencefromDayDifference(firstMonth, firstDay, firstYear, secondMonth, secondDay, secondYear) {
    //     let yearDifference = secondYear - firstYear;
    //     let firstDayOfYear = this.calculateDayOfYear(firstMonth, firstDay);
    //     let secondDayOfYear = this.calculateDayOfYear(secondMonth, secondDay);
    //     let difference;

    //     if (firstDayOfYear > secondDayOfYear) {

    //     } else if(secondDayOfYear > firstDayOfYear) {

    //     } else if (firstDayOfYear === secondDayOfYear) {
    //         difference = (365 * yearDifference) *  31556900;
    //     };
        
    //     return `Those dates are ${difference} seconds apart from each other!`;
        
    // };

    calculateDayOfYear(month, day) {
        let theMonth = month;
        let theDay;
        if (theMonth === 2) this.dayOfYear += 28;
        else if(theMonth === 4 || theMonth === 6 || theMonth === 9 || theMonth === 11) this.dayOfYear += 30;
        else if (theMonth === 3 || theMonth === 5 || theMonth === 7 || theMonth === 8 || theMonth === 10 || theMonth === 12) this.dayOfYear += 31;
        else if (theMonth === 1) {
            theDay = this.dayOfYear;
            console.log("in the method, theDay = " + theDay)
            this.dayOfYear = 0;
            theDay += day;
            console.log(this.dayOfYear);
            console.log("after adding day, theDay is " + theDay)
            return theDay;
        }
        theMonth--;
        console.log("should be decrementing down " + theDay)
        this.calculateDayOfYear(theMonth, day);

        
       
    }

}
