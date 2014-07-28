/**
 * Created by voctor on 14-7-27.
 */
function guess_number(answer_number,input_number) {
    var a_count=0,b_count=0;
    for(var i=0;i<answer_number.length;i++){
        if(answer_number[i]==input_number[i]){
            a_count++;
        }
    }
    for(var i=0;i<answer_number.length;i++){
        for(var j=0;j<input_number.length;j++){
            if(answer_number[i]==input_number[j]){
                b_count++;
            }
        }
    }
    return a_count+'A'+(b_count-a_count)+'B';
}

function create_random_number(){
    var random_number='';
    var i=0;
    while(true){
        var random_number=parseInt(Math.random()*(9999-1000)+1000);
        if(!is_repeat(random_number)){
            console.log(random_number)
            return random_number;
        }
       /* if(i==4){
            console.log(random_number);
            break;
        }
        if(i==0){
            random_number+=a_bit_number;
        }
        var a_bit_number=parseInt(Math.random()*10);

        random_number+=a_bit_number;
        i++;*/
       /* var a_bit_number=parseInt(Math.random()*10);
        if(random_number.length==4&&!is_repeat(random_number)){
            console.log(random_number);
            return parseInt(random_number);
        }
        random_number+=a_bit_number;*/
    }


    /*if(!is_repeat(random_number)){
        console.log(random_number);
        return parseInt(random_number);
    }*/
}
/*function check_number_is_repeat(a_bit_number,ahead_number){
    for(var i=0;i<ahead_number.length;i++){
        if(a_bit_number==a_bit_number[i]){
            return true;
        }
    }
    return false;
}*/
function is_repeat(random_number){
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
