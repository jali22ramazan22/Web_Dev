
function min(a, b){
    a = (a ?? 0);
    b = (b ?? 0);
    if(a > b){
        return a;
    }
    return b;
}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1