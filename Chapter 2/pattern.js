/*  This pattern we have to print
#
##
###
####
#####
######
*/ 

for(let i = 0; i<6; i++){
    let count = 0;
    let str = "";
    while(count<=i){
        str += "#";
        count++;
    }
    console.log(str);
}

