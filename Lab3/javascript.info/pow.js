function pow(p, n){
    if(p == 0){
        return 1;
    }
    return pow(p-1, n) * n;
}

