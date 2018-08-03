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

});