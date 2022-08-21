for (let x = 1; x <= 9; x++) {
    var line = '';
    for (let y = 1; y <= x; y++) {
        line+=(x+'*'+y+' = '+(x*y)+' ');
    }
    console.log(line);
} 