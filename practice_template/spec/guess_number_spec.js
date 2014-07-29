/**
 * Created by voctor on 14-7-27.
 */
describe("guess 1234 number", function() {

    var answer_number='1234';
    var input_number=['1234','4321','5678','1536'];
    beforeEach(function() {

    });
    afterEach(function(){

    });
    it("should input 1234 number return 4A0B", function(){

        var result=CompareNumber.compare_number(answer_number,input_number[0]);
        expect(result).toBe('4A0B');

    });
    it("should input 4321 number return 0A4B", function(){

        var result=CompareNumber.compare_number(answer_number,input_number[1]);
        expect(result).toBe('0A4B');

    });
    it("should input 5678 number return 0A0B", function(){

        var result=CompareNumber.compare_number(answer_number,input_number[2]);
        expect(result).toBe('0A0B');

    });
    it("should input 1536 number return 2A2B", function(){

        var result=CompareNumber.compare_number(answer_number,input_number[3]);
        expect(result).toBe('2A0B');

    });
});
describe('create a 4-bits random number which`s every bit is not repeat',function(){
    it('the number is number type', function () {
        var random_number=AnswerGenerator.create_random_number();
        expect(typeof random_number).toBe('number');
    });
    it('the number is 4-bits number', function () {
        var random_num=AnswerGenerator.create_random_number();
        expect(random_num.toString().length).toBe(4);
    });
    it('the number`s every bit is not repeat', function () {

        expect(AnswerGenerator.is_repeat(AnswerGenerator.create_random_number())).toBe(false);
    });
    it('the number is a random number', function () {
        expect(AnswerGenerator.is_random_number()).toBe(true);
    })
});
describe('integration testing', function () {

    it('the result of guess number is 4A0B ', function () {
        function mock_create_random_number() {
            return '1234';
        }
        var guess=new Guess(mock_create_random_number);

        expect(guess.guess_number('1234')).toBe('4A0B');
    })
});