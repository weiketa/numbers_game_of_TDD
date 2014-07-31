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
        var random_number=parseInt(answer.create_random_number());
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
describe('Game testing (answer:1234)', function () {
    describe('fail the game', function () {
        var mock_answer={create_random_number: function () {
            return '1234'
        }};
        var compare=new CompareNumber();
        var game=new Game(new Guess(mock_answer,compare));

        it('should show "Welcome Please input your number(6):" after game start', function () {
            expect(game.output_game_start_message()).toBe('Welcome!\nPlease input your number(6):')
        });
        it('should show "2A2B Please input your number(5): "after input 1243 ', function () {
            expect(game.guess('1243')).toBe('2A2B\n Please input your number(5):');
        });
        it('should show "1A3B Please input your number(4): "after input 1423 ', function () {
            expect(game.guess('1423')).toBe('1A3B\n Please input your number(4):');
        });
        it('should show "Cannot input duplicate numbers!"after input 1423 ', function () {
            expect(game.guess('1423')).toBe('Cannot input duplicate numbers!');
        });
        it('should show "0A4B Please input your number(3): "after input 4123 ', function () {
            expect(game.guess('4123')).toBe('0A4B\n Please input your number(3):');
        });
        it('should show "0A4B Please input your number(2): "after input 4321 ', function () {
            expect(game.guess('4321')).toBe('0A4B\n Please input your number(2):');
        });
        it('should show "1A3B Please input your number(1): "after input 2314 ', function () {
            expect(game.guess('2314')).toBe('1A3B\n Please input your number(1):');
        });
        it('should show "Game Over" when the sixth have not guess the correct number', function () {
            expect(game.guess('1245')).toBe('Game Over');
        });
    });
    describe('win the game', function () {
        var mock_answer={create_random_number: function () {
            return '1234'
        }};
        var compare=new CompareNumber();
        var game=new Game(new Guess(mock_answer,compare));
        it('should show "Congratulations!" when guess the correct number', function () {
            expect(game.guess('1234')).toBe('Congratulations!')
        });
    })

});