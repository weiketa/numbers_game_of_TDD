/**
 * Created by voctor on 14-7-27.
 */
function Guess(answer,compare){
    this.answer_number=answer.create_random_number();
    this.compare=compare;
}
Guess.prototype.guess_number=function(input_number){
    return this.compare.compare_number(this.answer_number,input_number);
}




