for (let index = 1; index <= 20; index++) {
    var line ='';
    if(index % 2 == 0){
        line = 'even number.';
    }else{
        line = 'odd number.'
    }
    console.log(index+' is an '+line);
}