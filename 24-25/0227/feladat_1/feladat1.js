const first = [3,7,4]//[1,2,1]
const second = [5,16,11]//[2,4,2]
const third = [2,9,7]//[1,2,1]

function checkPossibility(){
    if(!first[0]+first[2]==first[1]){
        return [-1]
    }
    if(!first[0]+third[0]==second[0]){
        return [-1]
    }
    if(!third[0]+third[2]==third[1]){
        return [-1]
    }
    if(!first[2]+third[2]==second[2]){
        return [-1]
    }
    if(!first[0]+first[2]+third[0]+third[2]==second[1]){
        return [-1]
    }
    return [first[0],first[2],third[0],third[2]]
}
console.log(checkPossibility());
