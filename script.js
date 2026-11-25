const stations = [

{
name:"강남역",
hint:"2호선 · 서울 대표 중심역",
level:1
},

{
name:"잠실역",
hint:"2호선 · 8호선 환승",
level:1
},

{
name:"신림역",
hint:"2호선 · 관악구 위치",
level:2
},

{
name:"봉천역",
hint:"2호선 · 관악구 역",
level:3
},

{
name:"가락시장역",
hint:"3호선 · 8호선 환승",
level:3
},

{
name:"응암역",
hint:"6호선 시작 역",
level:5
}

];


let answer;
let score=0;
let combo=0;


function newQuestion(){

answer =
stations[Math.floor(Math.random()*stations.length)];

document.getElementById("hint").innerHTML=
"힌트 : "+answer.hint;

document.getElementById("level").innerHTML=
"⭐".repeat(answer.level)+" 난이도";

document.getElementById("answer").value="";

}


function checkAnswer(){

let input =
document.getElementById("answer").value.trim();

let result =
document.getElementById("result");


if(input===answer.name){

score += answer.level*10;
combo++;

result.innerHTML="✅ 정답!";

}

else{

combo=0;

result.innerHTML=
"❌ 정답 : "+answer.name;

}


document.getElementById("score").innerHTML=score;

document.getElementById("combo").innerHTML=combo;


setTimeout(newQuestion,1200);

}


newQuestion();
