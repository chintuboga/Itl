const ratios = {
0:{0:160,12:130,24:105,36:85,48:70,60:60,72:52,84:46,96:41,108:38,120:36},
1:{0:80,12:65,24:52,36:42,48:35,60:30,72:26,84:23,96:20,108:19,120:18},
2:{0:40,12:32,24:26,36:21,48:17,60:15,72:13,84:11,96:10,108:9,120:9},
3:{0:20,12:16,24:13,36:10,48:8,60:7,72:6,84:5,96:5,108:4,120:4},
4:{0:10,12:8,24:6,36:5,48:4,60:3,72:3,84:2,96:2,108:2,120:2},
5:{0:5,12:4,24:3,36:2,48:2,60:1,72:1,84:1,96:1,108:1,120:1}
};

function calculate(){

let itlg = parseFloat(document.getElementById("itlg").value);
let lock = document.getElementById("locking").value;
let vest = document.getElementById("vesting").value;

if(!itlg || itlg <= 0){
alert("Enter ITLG coins");
return;
}

let ratio = ratios[lock][vest];

document.getElementById("ratio").innerText = ratio;

if(lock == 0 && vest == 0){
document.getElementById("status").innerText =
"Instant ITL Coins";
}else if(vest == 0){
document.getElementById("status").innerText =
"No ITL Coins";
}else{
document.getElementById("status").innerText =
"Vesting Rewards";
}

let totalCoins = itlg * ratio;
let monthlyCoins = vest > 0 ? totalCoins / vest : totalCoins;

document.getElementById("total").innerText =
totalCoins.toLocaleString();

document.getElementById("monthly").innerText =
monthlyCoins.toLocaleString(undefined,{
maximumFractionDigits:2
});
}
