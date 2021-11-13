const numbers = 	[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";

console.log(solution(numbers, hand));


function solution(numbers, hand) {
    var answer = '';
    let leftHand = -1 ;
    let rightHand = -1 ;
    
    let ll = 0;
    let rr = 0;
    
    
    for(let i = 0 ; i < numbers.length ; i++){
        let lCount = 0;
        let rCount = 0;
        
        switch(numbers[i]){
            case 1: case 4: case 7:
                answer += 'L';
                leftHand = numbers[i];
                break;
            case 3: case 6: case 9:
                answer += 'R';
                rightHand = numbers[i];
                break;
            case 2: case 5: case 8: case 0:
                ll = leftHand - numbers[i]; 
                rr = rightHand - numbers[i];
                
                while(true){
                    if(leftHand == 0) {
                        if(numbers[i] == 8){
                            lCount = 1;
                            break;
                        }
                        if(numbers[i] == 7 || numbers[i] == 5 || numbers[i] == 9){
                            lCount = 2;
                            break;
                        }
                        else if(numbers[i] == 4 || numbers[i] == 2 || numbers[i] == 6){
                            lCount = 3;
                            break;
                        }
                        else if(numbers[i] == 1 || Number[i] == 3){
                            lCount = 4;
                            break;
                        }
                    }

                    if(numbers[i] == 0){
                        if(leftHand == 8){
                            lCount = 1;
                            break;
                        }
                        else if(leftHand == 7 || leftHand == 5){
                            lCount = 2;
                            break;
                        }
                        else if(leftHand == 2 || leftHand == 4){
                            lCount = 3;
                            break;
                        }
                        else if(leftHand == 1) {
                            lCount = 4;
                            break;
                        }
                    }


                    if(ll == 0){
                        break;
                    }
                    
                    if(ll < 0){
                        if(ll < -3){
                            ll = ll + 3;
                            lCount = lCount + 1;
                        }
                        else{
                            ll = ll + 1;
                            lCount = lCount + 1;
                        }
                    }
                    
                    if(ll > 0){
                        if(ll > 3){
                            ll = ll - 3;
                            lCount = lCount + 1;
                        }
                        else {
                            ll = ll - 1;
                            lCount = lCount + 1;
                        }
                    }
                }
                
                
                while(true){
                    if(rightHand == 0) {
                        if(numbers[i] == 8){
                            rCount = 1;
                        }
                        if(numbers[i] == 7 || numbers[i] == 5 || numbers[i] == 9){
                            rCount = 2;
                            break;
                        }
                        else if(numbers[i] == 4 || numbers[i] == 2 || numbers[i] == 6){
                            rCount = 3;
                            break;
                        }
                        else if(numbers[i] == 1 || numbers[i] == 3){
                            rCount = 4;
                            break;
                        }
                    }

                    if(numbers[i] == 0){
                        if(rightHand == 8){
                            rCount = 1;
                            break;
                        }
                        else if(rightHand == 5 || rightHand == 9){
                            rCount = 2;
                            break;
                        }
                        else if(rightHand == 2 || rightHand == 6){
                            rCount = 3;
                            break;
                        }
                        else {
                            rCount = 4;
                            break;
                        }
                    }


                    if(rr == 0){
                        break;
                    }
                    
                    if(rr < 0){
                        if(rr < -3){
                            rr = rr + 3;
                            rCount = rCount + 1;
                        }
                        else{
                            rr = rr + 1;
                            rCount = rCount + 1;
                        }
                    }
                    
                    if(rr > 0){
                        if(rr > 3){
                            rr = rr - 3;
                            rCount = rCount + 1;
                        }
                        else {
                            rr = rr - 1;
                            rCount = rCount + 1;
                        }
                    }
                }
                
                if(lCount == rCount){
                    if(hand == 'left'){
                        console.log("이때 lCount == rCount 이면서 왼손잡이");
                        console.log(`leftHand : ${leftHand}`);
                        console.log(`rightHand : ${rightHand}`);
                        console.log(`numbers : ${numbers[i]}`);
                        console.log(`lCount : ${lCount}`);
                        console.log(`rCount : ${rCount}`);
                        console.log("LLLLLL");
                        answer += 'L';
                        leftHand = numbers[i];
                    }
                    else{
                        console.log("이때 lCount == rCount 이면서 오른손잡이");
                        console.log(`leftHand : ${leftHand}`);
                        console.log(`rightHand : ${rightHand}`);
                        console.log(`numbers : ${numbers[i]}`);
                        console.log(`lCount : ${lCount}`);
                        console.log(`rCount : ${rCount}`);
                        console.log("RRRRR");
                        answer += 'R';
                        rightHand = numbers[i];
                    }
                }
                else if(lCount > rCount){
                    console.log("이때  lCount > rCount ");
                    console.log(`leftHand : ${leftHand}`);
                    console.log(`rightHand : ${rightHand}`);
                    console.log(`numbers : ${numbers[i]}`);
                    console.log(`lCount : ${lCount}`);
                    console.log(`rCount : ${rCount}`);
                    console.log("RRRRR");
                    answer += 'R';
                    rightHand = numbers[i];
                }
                else {
                    console.log("이때  lCount < rCount ");
                    console.log(`leftHand : ${leftHand}`);
                    console.log(`rightHand : ${rightHand}`);
                    console.log(`numbers : ${numbers[i]}`);
                    console.log(`lCount : ${lCount}`);
                    console.log(`rCount : ${rCount}`);
                    console.log("LLLLLL");
                    answer += 'L';
                    leftHand = numbers[i];
                }
                
                
                break;
        }
        
    }
    
    return answer;
}