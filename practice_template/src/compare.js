/**
 * Created by voctor on 14-7-29.
 */
function CompareNumber() {

}
CompareNumber.compare_number=function (answer_number,input_number) {
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

