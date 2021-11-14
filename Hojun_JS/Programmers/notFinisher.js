const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];


// ["ana", "mislav", "mislav", "stanko"]
// ["ana", "mislav", "stanko"]

console.log(solution(participant, completion));

function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort();

    for(let i = 0 ; i < participant.length ; i++){
        if(participant[i] != completion[i]){
            break;
        }
        answer = participant[i+1];
        // answer.push(participant[i+1]);
    }
    
    return answer;
}