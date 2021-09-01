/* This is the pattern we have to print
 # # # #
# # # # 
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

let height = 9;
let width = 8;

for(let i = 1; i<=height; i++){
    let pattern = "";
    for(let j = 1; j<width/2; j++){
        if(i%2 == 0){
            pattern += "#";
            pattern += " ";
        }
        else{
            pattern += " ";
            pattern += "#";
        }
    }
    console.log(pattern);
}

