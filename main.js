// var questions = [

//     {
//         prompt: "what is my name?\n(a) gideon\n\ (b) Bright\n (c) Mike",
//         answer: 'a'
//     },
//     {
//         prompt: "what is my age?\n(a) 10\n\ (b) 13\n (c) 15",
//         answer: 'c'
//     }
// ]

// var score = 0

// for(var i = 0;  i < questions.length; i ++){
//     var response = window.prompt(questions[i].prompt)
//     if(response == questions[i].answer)
//     {
//         score++
//         alert("correct")
//     }
//     else{
//         alert("wrong")
//     }

// }    alert("you got " + score+"/4")
 

// var btn = document.getElementById('btn')
// var questions = [

//     {
//         prompt: "what is my name?\n(a) gideon\n\ (b) Bright\n (c) Mike",
//         answer: 'a'
//     },
//     // {
//     //     prompt: "what is my age?\n(a) 10\n\ (b) 13\n (c) 15",
//     //     answer: 'c'
//     // }
// ]
var message = document.getElementById('p')
var text = document.getElementById('quest')
var aT = document.getElementById('a_t')
var bT = document.getElementById('b_t')
var cT = document.getElementById('c_t')
var ansEl = document.getElementsByClassName('an')
var questions = [

    {
        prompt: "what is my name?",
        answer: 'a'
    },
    {
        prompt: "what is my age?",
        answer: 'c'
    }
]
var current = 0
var score =  0
loadQuiz()
function loadQuiz(){
    const currentD = questions[current]
    text.innerText = currentD.prompt
    aT.innerText = currentD.answer
    bT.innerText = currentD.answer
    cT.innerText = currentD.answer
}
for(var i = 0; i < questions.length; i++){
    var response = questions[i].prompt
    if(response == questions[i].answer){
        alert("correct!")
        score++
    }else
    alert("Wrong!")
}
