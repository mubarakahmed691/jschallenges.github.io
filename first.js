
//challenge 1 your age in days

function ageInDays(){
    var birthyear = prompt('what is your birthyear.');
    var daysage =  (2021 - birthyear) * 356;
    var h = document.createElement('h1');
    var txt = document.createTextNode('you are ' + daysage + ' days old.');
    h.setAttribute('id' , 'age');
    h.appendChild(txt);
    document.getElementById('result').appendChild(h);    
}

function reseet(){
    document.getElementById('age').remove();
}


//challenge 2 generate cats;

function catGenerator(){
    var img = document.createElement('img');
    var div = document.getElementById('flex-img');
    img.src="emoji.png";
    
    img.setAttribute('id' , 'image')
    div.appendChild(img);
}
function remove(){
    document.getElementById('image').remove();
}



//challenge 3 rps game;



function rpsGame(yourchoice){
    var humanchioce , botchoice;
    console.log(yourchoice);
    humanchioce = yourchoice.id;
    
    botchoice =numTopic(randomAccess());
    console.log('computer choice',botchoice);
   
    result = decideWinner(humanchioce , botchoice);
    console.log(result);
   
   
    message = finalMessage(result);
    console.log(message);
    rpsFrontend( yourchoice.id ,  botchoice , message );
}

function randomAccess(){
    return Math.floor(Math.random() * 3);
}

function numTopic(number){
    return ['rock' , 'paper' , 'scissor'][number];
}

function decideWinner(yourchoice, computerchoice){
    var rpscondition = {
        'rock':{'scissor':1 , 'paper':0 , 'rock':0.5},
        'paper':{'rock':1 , 'scissor':0, 'paper':0.5},
        'scissor':{'paper':1 , 'rock':0 , 'scissor':0.5}
    };

    var yourScore = rpscondition[yourchoice][computerchoice];
  
  var computerScore = rpscondition[computerchoice][yourchoice];

  return [yourScore,computerScore];
}

function finalMessage([yourScore , computerScore]){

    if (yourScore===0){
        return {'massage': 'you Lost!' , 'color':'red'};
    }
    else if(yourScore===0.5){
        return {'massage': 'you Tied' , 'color': 'yellow'};
    }
    else{
        return {'massage': 'you Win!' , 'color':'green'};
    }
}

function rpsFrontend(humanimgchoice ,botimgchoice ,finalmessage){
    var imgdata = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
   
 document.getElementById('scissor').remove();

var humandiv = document.createElement('div');
var botdiv = document.createElement('div');
var massagediv = document.createElement('div');

humandiv.innerHTML="<img src='" + imgdata[humanimgchoice] + "' height=150px width=150px , sytle= 'box-shadow: 0px 10px 50px  rgba(0, 18, 18, 0.5); margin:10px;' >"
massagediv.innerHTML = "<h1 style='color: "+finalmessage['color'] + " ; font-size:30px; padding:10px; '>" + finalmessage['massage']+"</h1>"
botdiv.innerHTML="<img src='" +imgdata[botimgchoice]+ "' sytle= height='150px'; width='150px'; margin:10px;>"

document.getElementById('flex-box-rps').appendChild(humandiv);
document.getElementById('flex-box-rps').appendChild(massagediv);
document.getElementById('flex-box-rps').appendChild(botdiv);
}






//challenge 4  change buttons color


var allbuttons = document.getElementsByTagName('button');
console.log(allbuttons);

var copyallbuttons = [];
for(let i=0 ; i<allbuttons.length ; i++)
{
    copyallbuttons.push(allbuttons [i].classList[0]);
}
console.log(copyallbuttons);


function buttonchang(buttoncolor){
    if(buttoncolor.value==="red")
    {buttonred();}
    else if(buttoncolor.value==="green")
    {buttongreen();}
    else if(buttoncolor.value==="random")
    {random();}
    else if(buttoncolor.value==="reset")
    {reset();}
}



function buttonred(){
for(let i=0; i<allbuttons.length; i++)
{
    allbuttons[i].classList.remove(allbuttons[i].classList[0]);
    allbuttons[i].classList.add('reds');
}

}
function buttongreen(){
    for(let i=0; i<allbuttons.length; i++)
    {
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add('green');
    }
}
function random(){
    let choice =['green','reds','yellow','blue'];

    for(let i=0; i<allbuttons.length; i++)
    {
        let randomnumber=Math.floor(Math.random()*4);
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add(choice[randomnumber]);
    }
}
function reset(){
    for(let i=0; i<allbuttons.length; i++)
    {
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add(copyallbuttons[i]);
    }
}