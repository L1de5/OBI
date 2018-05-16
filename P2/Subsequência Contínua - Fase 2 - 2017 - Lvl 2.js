var N = 15, V = [3, 3, 4, 51, - 1, 82, 83, 82, 2, 3, 3, 4, 3, - 4, - 3], M = 0, C =1;

for(var i = 1; i < N; i++){
    if ( (V[i] - V[i - 1] >= -1) && (V[i] - V[i - 1] <= 1) ){
        C++;
    }else{
        if(C > M){
            M = C;
        }
        C = 1;
    }
}
console.log(M);