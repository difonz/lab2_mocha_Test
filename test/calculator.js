var expect = require("chai").expect;
var calculator = require("../app/calculator.js");


describe("Calculator App",()=>{
    describe("Addition", ()=>{
        it("add(5, 2) expected result 7 PASS",() =>{
            expect(calculator.add(5,2)).to.equal(7);
        });
        it("add(5, 2) expected result 8 FAIL", () => {
            expect(8).to.equal(calculator.add(5,2));
        });
    });

    describe("Subtraction", ()=>{
        it("sub(5, 2) expected result 3 PASS",() =>{
            expect(calculator.sub(5,2)).to.equal(3);
        });
        it("sub(5, 2) expected result 5 FAIL", () => {
            expect(5).to.equal(calculator.sub(5,2));
        });
    });

    describe("Multiplication", ()=>{
        it("mul(5, 2) expected result 10 PASS",() =>{
            expect(calculator.mul(5,2)).to.equal(10);
        });
        it("mul(5, 2) expected result 12 FAIL", () => {
            expect(12).to.equal(calculator.mul(5,2));
        });
    });

    describe("Division", ()=>{
        it("div(10, 2) expected result 5 PASS",() =>{
            expect(calculator.div(5,2)).to.equal(5);
        });
        it("div(10, 2) expected result 8 FAIL", () => {
            expect(2).to.equal(calculator.div(5,2));
        });
    });
  
})