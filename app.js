const submitButton = document.querySelector('.submit-button').addEventListener('click', submitQuiz)


//initial score
var score = 0;

function submitQuiz() {

    //NUMBER ONE
    var optionOne = document.getElementsByName('OneOption')

    //loop through each option and get the checked value
    for (var i = 0; i < optionOne.length; i++) {
        if (optionOne[i].checked) {
            var result = optionOne[i].value
        }
    }

    //select the right option and increment score

    if (result == "Pepsi") {

        score++

    } else {

        score
    }

    //NUMBER TWO

    var optionTwo = document.getElementsByName('TwoOption')

    //loop through each option and get the checked value

    for (var i = 0; i < optionTwo.length; i++) {
        if (optionTwo[i].checked) {
            var result = optionTwo[i].value
        }
    }
    //if the right option is checked, increment score

    if (result == "The Good Place") {

        score++
    } else {

        score
    }

    //NUMBER THREE

    var optionThree = document.getElementsByName('ThreeOption')

    for (var i = 0; i < optionThree.length; i++) {
        if (optionThree[i].checked) {
            var result = optionThree[i].value
        }
    }
    //IF the right option is checked, increment score
    if (result == "Ass") {

        score++
    } else(
        score
    )

    //NUMBER FOUR

    var optionFour = document.getElementsByName('FourOption')

    for (var i = 0; i < optionFour.length; i++) {
        if (optionFour[i].checked) {
            var result = optionFour[i].value
        }
    }

    if (result == "Bicycle") {
        score++
    } else {
        score
    }
    //NUMBER FIVE

    var optionFive = document.getElementsByName('FiveOption')

    for (var i = 0; i < optionFive.length; i++) {
        if (optionFive[i].checked) {
            var result = optionFive[i].value
        }
    }

    if (result == "Spain") {
        score++

    } else {
        score
    }


    //NUMBER SIX

    var optionSix = document.getElementsByName('SixOption')

    for (var i = 0; i < optionSix.length; i++) {
        if (optionSix[i].checked) {
            var result = optionSix[i].value
        }
    }

    if (result == "3") {
        score++
    } else {
        score
    }

    //NUMBER SEVEN

    var optionSeven = document.getElementsByName('SevenOption')

    for (var i = 0; i < optionSeven.length; i++) {
        if (optionSeven[i].checked) {
            var result = optionSeven[i].value
        }
    }

    if (result == "6ft3") {
        score++
    } else {
        score
    }

    //NUMBER EIGHT

    var optionEight = document.getElementsByName('EightOption')

    for (var i = 0; i < optionEight.length; i++) {
        if (optionEight[i].checked) {
            var result = optionEight[i].value
        }
    }

    if (result == "Semo") {
        score++
    } else {
        score
    }


    //NUMBER NINE

    var optionNine = document.getElementsByName('NineOption')

    for (var i = 0; i < optionNine.length; i++) {
        if (optionNine[i].checked) {
            var result = optionNine[i].value
        }
    }

    if (result == "Twitter") {
        score++
    } else {
        score
    }

    //NUMBER TEN

    var optionTen = document.getElementsByName('TenOption')

    for (var i = 0; i < optionTen.length; i++) {
        if (optionTen[i].checked) {
            var result = optionTen[i].value
        }
    }

    if (result == "Barcelona") {
        score++
    } else {
        score
    }

    console.log(`${score} / 10 `)

    //DYNAMIC INPUTS IN THE MODAL THAT POPS UP ON SUBMIT

    var resultScore = document.querySelector('.result-score')
    var adjective = document.querySelector('.adjective')
    var scoreModal = document.querySelector('.score-modal')

    //INPUT 1

    resultScore.textContent = `${score}`

    //INPUT 2

    adjective.textContent = `${(score <= 5)? 'poor lol, do you even know me?' : 'good! You know me'}`

    scoreModal.style.transform = 'scale(1)'


}
var scoreModal = document.querySelector('.score-modal')

//CLOSE POPUP

var closeButton = document.querySelector('.close-btn').addEventListener('click', () => {
    scoreModal.style.transform = 'scale(0)'

    //RELOAD PAGE AFTER SUBMIT

    location.reload()

})


// The time at the top

function writeTime() {
    let time = document.querySelector('.time')
    let result = new Date().toLocaleTimeString()
    time.textContent = `${result}`
}
setInterval(() => {
    writeTime()
}, 1000);

//Seconds counter at the bottom

let initial = 0;
let seconds = document.querySelector('.seconds')

function writeSeconds() {
    seconds.textContent = initial++
}
setInterval(() => {
    writeSeconds()
}, 1000);