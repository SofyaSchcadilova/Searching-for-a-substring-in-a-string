//Щадилова Софья кнмо-101
const fs = require('fs');
let S = fs.readFileSync(process.argv[2],'utf-8');
let T = fs.readFileSync(process.argv[3],'utf-8');
const n = S.length;
const m = T.length;
let occur = new Array();
var time = performance.now();
let i = 0;
while (i < n - m + 1){
    let j = 0;
    while (S[i + j] == T[j]){
        j++;
        if (j == m){
            occur.push(i);
            break;
        }
    }
    i++;
}
time = performance.now() - time;
console.log(time, occur)
