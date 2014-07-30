/**
 * Created by voctor on 14-7-27.
 */
describe("guess 1234 number", function() {

    var answer_number='1234';
    var input_number=['1234','4321','5678','1536'];
    var compare=new CompareNumber();
    beforeEach(function() {

    });
    afterEach(function(){

    });
    it("should input 1234 number return 4A0B", function(){

        var result=compare.compare_number(answer_number,input_number[0]);
        expect(result).toBe('4A0B');

    });
    it("should input 4321 number return 0A4B", function(){

        var result=compare.compare_number(answer_number,input_number[1]);
        expect(result).toBe('0A4B');

    });
    it("should input 5678 number return 0A0B", function(){

        var result=compare.compare_number(answer_number,input_number[2]);
        expect(result).toBe('0A0B');

    });
    it("should input 1536 number return 2A2B", function(){

        var result=compare.compare_number(answer_number,input_number[3]);
        expect(result).toBe('2A0B');

    });
});
describe('create a 4-bits random number which`s every bit is not repeat',function(){
    var answer=new AnswerGenerator();
    it('the number is number type', function () {
        var random_number=answer.create_random_number();
        expect(typeof random_number).toBe('number');
    });
    it('the number is 4-bits number', function () {
        var random_num=answer.create_random_number();
        expect(random_num.toString().length).toBe(4);
    });
    it('the number`s every bit is not repeat', function () {

        expect(AnswerGenerator.is_repeat(answer.create_random_number())).toBeFalsy();
    });
    it('the number is a random number', function () {
        expect(AnswerGenerator.is_random_number()).toBeTruthy();
    })
});
describe('Guess unit testing', function () {
    it('input 1234 and mock 1234 of answer number should return 4A0B', function () {
        var mock_answer={create_random_number: function () {
            return '1234'
        }};
        var mock_compare={compare_number: function (answer_number,input_number) {
            return answer_number==input_number ? '4A0B':'';
        }};
        var guess=new Guess(mock_answer,mock_compare);
        expect(guess.guess_number('1234')).toBe('4A0B');
    })
});
describe('Guess integration testing', function () {

    it('input 1234 and mock 1234 of answer number should return 0A4B ', function () {
        var mock_answer={create_random_number: function () {
            return '1234'
        }};
        var compare=new CompareNumber();
        var guess=new Guess(mock_answer,compare);

        expect(guess.guess_number('4321')).toBe('0A4B');
    })
});
