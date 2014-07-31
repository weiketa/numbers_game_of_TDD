/**
 * Created by voctor on 14-7-30.
 */
function Game(guess){
    this.game_status='start';
    this.guess_times=6;
    this.game_guess=guess;
    this.ahead_guess_number='';
}
Game.prototype.output_game_start_message= function () {
    return 'Welcome!\nPlease input your number('+this.guess_times+'):';
};
Game.prototype.guess= function (input_number) {
    if(this.game_status=='end'){
        return 'Please restart,game over!';
    }
    if(input_number==this.ahead_guess_number){
        return 'Cannot input duplicate numbers!';
    }
    var guess_result= this.game_guess.guess_number(input_number);
    if(guess_result=='4A0B'){
        this.game_status='end';
        return 'Congratulations!';
    }
    this.guess_times--;
    if(this.guess_times==0){
        this.game_status='end';
        return 'Game Over';
    }
    this.ahead_guess_number=input_number;
    return ''+guess_result+'\n Please input your number('+this.guess_times+'):'
}
