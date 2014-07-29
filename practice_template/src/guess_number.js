/**
 * Created by voctor on 14-7-27.
 */
function Guess(create_random_number){
    this.answer_number=create_random_number();
}
Guess.prototype.guess_number=function(input_number){
    return CompareNumber.compare_number(this.answer_number,input_number);
}




