const fs = require('fs');
let S = fs.readFileSync(process.argv[2],'utf-8');
let T = fs.readFileSync(process.argv[3],'utf-8');
const n = S.length;
const m = T.length;
let occur = new Array();
var time = performance.now();
let hT = 0;
for (i = 0; i < m; i++)
    hT += T.charCodeAt(i);
let hS = 0;
for (i = 0; i < m; i++)
    hS += S.charCodeAt(i); 
if (hS == hT)
    occur.push(0)
for (i = 1; i < n - m + 1; i++){
    hS = hS - S.charCodeAt(i - 1) + S.charCodeAt(i + m - 1);
    if (hS == hT){
        let j = 0;
        while (S[i + j] == T[j]){
            j++;
            if (j == m){
                occur.push(i);
                break;
            }
        }
    }    
}
time = performance.now() - time;
console.log(time, occur)
