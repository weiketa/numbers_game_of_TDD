/**
 * Created by voctor on 14-7-29.
 */
function AnswerGenerator() {

}
AnswerGenerator.prototype.create_random_number=function (){
    var random_number='';
    var i=0;
    while(true){
        var random_number=parseInt(Math.random()*(9999-1000)+1000);
        if(!AnswerGenerator.is_repeat(random_number)){
            return random_number;
        }
    }
}

AnswerGenerator.is_repeat=function (random_number){
    random_number=random_number.toString();
    for(var i=0;i<random_number.length;i++){
        for(var j=i+1;j<random_number.length;j++){
            if(random_number[i]==random_number[j]){
                return true;
            }
        }
    }
    return false;
}

AnswerGenerator.is_random_number=function () {
    var answer=new AnswerGenerator();
    var one_random_number=answer.create_random_number();
    var another_random_number=answer.create_random_number();
    if(one_random_number!=another_random_number){
        return true;
    }
    return false;
}