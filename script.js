function diagonalSquare1(n){
    let pola = "";
    for(let i = 1; i < 9; i++ ){
        for(let j = 1; j < 9; j++){
            if(i==1 ||i==8||j==1||j==8-i+1||i==j||j==8){
                pola +=("*");
            }else{
                pola +=(" ")
            }
        }
        pola+=("\n")
    }

    console.log(pola)
}
diagonalSquare1();



















function diagonalSquare1(n){
    let pola = "";
    m=2*9-1;
    for(let i = 1; i <= m; i++ ){
        for(let j = 1; j <= m; j++){
            if(i==j || j==(m-i+1)){
                pola +=("*");
            }else{
                pola +=(" ")
            }
        }
        pola+=("\n")
    }

    console.log(pola)
}
diagonalSquare1();

















function diagonalSquare(n){
    let pola = "";
    for(let i = 1; i < 9; i++ ){
        for(let j = 1; j < 9; j++){
            if(i+j >= 9){
                pola +=("*");
            }else{
                pola +=(" ")
            }
        }
        pola+=("\n")
    }

    console.log(pola)
}
diagonalSquare();











let n = 9;
let string = "";
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < (9 - i) *2 - 1; k++) {
        string += "";
    }
    string += "\n";
}
for (let i = 2; i <= 9; i++) {
    // printing spaces
    for (let j = 9; j > i; j--) {
        string += " ";
    }
    for (let k = 0; k < (9 - i) *2 - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);