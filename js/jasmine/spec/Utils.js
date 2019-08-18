//This is test suite
describe("calc", function() {
	
    describe("should be able to calculate", function() {

        it("should spy on calculateDiff", function() {
	        var spy = spyOn(calc, 'calculateDiff');
	        calc.calculateDiff();
	        /*** expectation ***/
	        expect(spy).toHaveBeenCalled();
	    });

	    it("should spy on rateCheck", function() {
	        var spy = spyOn(calc, 'rateCheck');
	        calc.rateCheck();
	        /*** expectation ***/
	        expect(spy).toHaveBeenCalled();
	    });

	    it("should spy on calcCI", function() {
	        var spy = spyOn(calc, 'calcCI');
	        calc.calcCI();
	        /*** expectation ***/
	        expect(spy).toHaveBeenCalled();
	    });

	    it("should spy on emptFields", function() {
	        var spy = spyOn(calc, 'emptyFields');
	        calc.emptyFields();
	        /*** expectation ***/
	        expect(spy).toHaveBeenCalled();
	    });
    });
});