//the link to my json data
//https://api.myjson.com/bins/p31ik

//stores the users questions and the answers
var myInputs = [];

var questionCount = 0;
//initial variable for my json data 
var myResponses;

//some query selectors!
var submitQuestion = document.querySelector('#submitQuestion');
var errorParagraph = document.querySelector('#error');
var userInput = document.querySelector('#userInput').value;
var smokeGif = document.querySelector('#smokeGif');
var randomAnswer = '';
var printAnswer = document.querySelector('#answer');
var userInput = document.querySelector('#userInput').value;
var hiddenContent = document.querySelector('.hiddenContent');
var dataButton = document.querySelector('#dataContainer');
var closeButton = document.querySelector('#closeButton');
var pastQuestions = document.querySelector('#pastQuestions');
var hiddenTitle = document.querySelector('#hiddenTitle');

//shows the smoke gif
var displayGif = function () {
    smokeGif.style.display = 'inline';
    imageUrl = smokeGif.src;
    smokeGif.src = "";
    smokeGif.src = imageUrl;

}

//hides the smoke gif
var hideGif = function() {
    smokeGif.style.display = 'none';
}

submitQuestion.onclick = function () {
    userInput = document.getElementById('userInput').value;
    if (userInput != '') {
        errorParagraph.style.display = 'none';
        questionCount += 1;
        //generate random answer
        randomAnswer = myResponses[Math.floor(Math.random() * myResponses.length)]
        
        
        //display gif, then after 1 second, hide it
        displayGif();
        setTimeout(function() {
            hideGif();
        }, 900);
        //print the random answer to the screen
        printAnswer.innerHTML = randomAnswer

    
        var listItem = document.createElement("li");
        listItem.innerHTML = userInput + ": " + randomAnswer;
        pastQuestions.appendChild(listItem);
    } else {
        errorParagraph.style.display = 'inline';
        errorParagraph.innerHTML = 'Text box can not be empty';
        errorParagraph.style.color = 'red'; 
        document.getElementById('userInput').focus();
    }
}

document.getElementById('userInput').onclick = function () {
    document.getElementById('userInput').value = '';
    printAnswer.innerHTML = '';
}


//shows hidden data and dynamic change of title
dataButton.onclick = function () {
    if (questionCount > 0 ) {
        hiddenTitle.innerHTML = 'Past Inquiries:';
    } else {
        hiddenTitle.innerHTML = 'Empty: enter a new question'
    }
    
    hiddenContent.style.display = 'inline';
    
}

//closes the model and hides the content
closeButton.onclick = function () {
    
    hiddenContent.style.display = 'none';
}

//fetch my json data from the server
fetch('https://api.myjson.com/bins/p31ik').then( function (res) { 
    res.json().then( function (answers) { 
        myResponses = answers
    }) 
});