import { Age } from './../src/age.js';

describe('Age', function() {
    let testAge;
    beforeEach(function() {
        testAge = new Age (10)
    });

    it ('should test earthAgeToSeconds and return correct number of seconds', function() {
        let seconds = testAge.earthAgeToSeconds();
        expect(seconds).toEqual(315569000);
    });

    it ('should test earthAgeToMercuryAge and return correct number of Mercury Years', function() {
        let mercuryAge = testAge.earthAgeToMercuryAge();
        expect(mercuryAge).toEqual(41);
    });

    it ('should test earthAgeToVenusAge and return correct number of Venus Years', function() {
        let venusAge = testAge.earthAgeToVenusAge();
        expect(venusAge).toEqual(16);
    });

    it ('should test earthAgeToMarsAge and return correct number of Mars Years', function() {
        let marsAge = testAge.earthAgeToMarsAge();
        expect(marsAge).toEqual(5);
    });

    it ('should test earthAgeToJupiterAge and return correct number of Jupiter Years', function() {
        let jupiterAge = testAge.earthAgeToJupiterAge();
        expect(jupiterAge).toEqual(0);
    });

    it ('should test earthYearsLeft when you are one year less than USA average and return correct number of Earth Year left', function() {
        let testAge2 = new Age(78);
        let remainder = testAge2.earthYearsLeft();
        expect(remainder).toEqual("You have exactly 1 year left! Use it wisely");
    });

    it ('should test earthYearsLeft when less than USA average and return correct number of Earth Years left', function() {
        let remainder = testAge.earthYearsLeft();
        expect(remainder).toEqual("You have 69 years left in your life, use it wisely");
    });

    it ('should test earthYearsLeft when you are exactly at the USA average and return correct statement', function() {
        let testAge3 = new Age(79);
        let remainder = testAge3.earthYearsLeft();
        expect(remainder).toEqual("According to my calculations, you are at right at the life expectancy of an average person in the USA");
    });

    it ('should test earthYearsLeft when you are exactly one year above the USA average and return correct statement', function() {
        let testAge4 = new Age(80);
        let remainder = testAge4.earthYearsLeft();
        expect(remainder).toEqual("You are exactly 1 year over the average life expectancy in the USA");
    });

    it ('should test earthYearsLeft when you are above the USA average and return correct statement', function() {
        let testAge5 = new Age(90);
        let remainder = testAge5.earthYearsLeft();
        expect(remainder).toEqual("Wow you are 11 years over the average life expectancy in the USA");
    });

    it ('should test secondsDifferencefromDayDifference and return correct statement', function() {
        let remainder = testAge.secondsDifferencefromDayDifference(4, 11, 2000, 7, 20, 2001);
        expect(remainder).toEqual("Those dates are 40176000 seconds apart from each other!");
    });

    // it ('should test calculateDayOfYear and return correct statement', function() {
    //     let theNewOne = testAge.calculateDayOfYear(3, 15);
    //     console.log("getting returned " + theNewOne)
    //     expect(theNewOne).toEqual(74);
    // });
});