import { Age } from './../src/age.js';

describe('Age', function() {
    let testAge;
    beforeEach(function() {
        testAge = new Age (2)
    });

    it ('should test earthAgeToSeconds and return correct number of seconds', function() {
        let seconds = testAge.earthAgeToSeconds();
        expect(seconds).toEqual(63113800);
    })

});