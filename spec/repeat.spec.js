require("../src/repeat.js");

describe("repeat", function() {
    it("repeats strings", function() {
        expect("abc".repeat(2)).toEqual("abcabc");
//        expect("abc".repeat(0)).toEqual("");
    });

  	it("check equality",function(){
		expect(isEqual(1,1)).toBe(true);
//		expect(isEqual(1,2)).toBe(false);
	});

});
