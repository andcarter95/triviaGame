    // qaContent = [{question1: content, A:optiona , B: option b, C: option c, 
    //     D: option d, correct answer: "A", category: "sports"}, {question2:...}]

const qaContent = [
    {question: "In what year was the first-ever Wimbledon Championship held?",
    answers: [
         {text: '1877', correct: true },
         {text: '1902', correct: false },
         {text: '1934', correct: false },
         {text: '1964', correct: false }
      ],
    catagory: "sports"},
    {question: "In what state did the first official American basketball game take place?",
    answers: [
        {text: 'New York', correct: false },
        {text: 'Georgia', correct: false },
        {text: 'Kansas', correct: false },
        {text: 'New Jersey', correct: true}
     ],
    catagory: "sports"},
    // {question3: How many soccer players should each team have on the field at the start of each match?, A: 15, B: 11, C: 9, D: 7, correct answer: "C", catagory: "sports"}
    // {question4: When Michael Jordan played for the Chicago Bulls how many NBA Championships did he win?, A: 4, B: 5, C: 6, D: 7, correct answer: "C", catagory: "sports"}
    // {question5: What team has the most NBA titles?, A: Boston Celtics, B: Los Angeles Lakers, C: San Antonio Spurs, D: Chicago Bulls, correct answer: "A", catagory: "sports"}
    // {question6: The Olympics are held every how many years?, A: 1, B: 2, C: 4, D: 10, correct answer: "C", catagory: "sports"}
    // {question7: The Triple Crown award is given to a horse that wins every race but which race?, A: The Kentucky Derby, B: Churchhill Downs, C: Preakness Stakes, D: Belmont Stakes, correct answer: "B", catagory: "sports"}
    // {question8: How big is an Olympic-sized swimming pool?, A: 25 meters, B: 50 meters, C: 75 meters, D: 100 meters, correct answer: "B", catagory: "sports"}
    // {question9: What team is considered the oldest in the NFL?, A: Dallas Cowboys, B: New York Giants, C: Green Bay Packers, D: San Fransisco 49ers, correct answer: "C", catagory: "sports"}
    // {question10: Who was the youngest player to score ten thousand points in the NBA?, A: Kobe Bryant, B: Lebroon James, C: Wilt Chamberlain, D: Michael Jordan, correct answer: "B", catagory: "sports"}
    // {question11: What is the most stolen base?, A: First, B: Second, C: Third, D: Fourth, correct answer: "B", catagory: "sports"}
    // {question12: What is the only country to have played in every single soccer World Cup?, A: Brazil, B: England, C: Germany, D: Spain, correct answer: "A", catagory: "sports"}
    {question: 'What was the first state?',
    answers: [
        {text: 'Virginia', correct: false},
        {text: 'New York', correct: false},
        {text: 'Pennsylvania', correct: false},
        {text: 'Delaware', correct: true}
     ],
    catagory: "history"},
    {question: 'When did the Cold War end?',
    answers: [
        {text: '1945', correct: false},
        {text: '1961', correct: false},
        {text: '1989', correct: true},
        {text: '1994', correct: false}
     ],
    catagory: "history"},
    // {question15: The Statue of Liberty was given to the US by which country?, A: France, B: England, C: Canada, D: Spain, correct answer: "A", catagory: "history"}
    // {question16: Which kind of flower bulbs were once exchanged as a form of currency?, A: Rose, B: Tulip, C: Lily, D: Poppy, correct answer: "B", catagory: "history"}
    // {question17: Where were the Declaration of Independence the Constitution and the Bill of Rights stored during World War II?, A: The White House, B: Camp David, C: Fort Knox, D: Undisclosed location, correct answer: "C", catagory: "history"}
    // {question18: Who invented the rabies vaccine?, A: Marie Curie, B: Francis Scott, C: Gregor Mendel, D: Louis Patuer, correct answer: "D", catagory: "history"}
    // {question19: What year did the Berlin wall fall?, A: 1922, B: 1948, C: 1969, D: 1989, correct answer: "D", catagory: "history"}
    // {question20: The shooting of whom in 1914 started World War I?, A: Franz Ferdinand, B: Pope Benedict, C: Winston Churchill, D: Joseph Stallin, correct answer: "A", catagory: "history"}
    // {question21: What is the name of the ship that rescued Titanic passengers hours after the ship went down?, A: The Santa Maria, B: The Carpathia, C: The Essex, D: USS Maine, correct answer: "B", catagory: "history"}
    // {question22: What was the first country to give women the right to vote?, A: England, B: France, C: Portugal, D: New Zealand, correct answer: "D", catagory: "history"}
    // {question23: Which US president is featured on the two dollar bill?, A: John Adams, B: Williamm Taft, C: Thomas Jefferson, D: Harry Truman, correct answer: "C", catagory: "history"}
    // {question24: In which country the Adolf Hitler was born?, A: Austria, B: Germany, C: Poland, D: Russia, correct answer: "A", catagory: "history"}
    {question: 'What is the chemical symbol of Mercury?',
    answers: [
        {text: 'Ca', correct: false},
        {text: 'Me', correct: false},
        {text: 'M', correct: false},
        {text: 'Hg', correct: true}
    ],
    catagory: "science"},
    {question: 'About how many taste buds does the average human tongue have?',
    answers: [
        {text: '10,000', correct: true},
        {text: '100,000', correct: false},
        {text: '1,000,000', correct: false},
        {text: '10,000,000', correct: false}
     ],
    catagory: "science"},
    // {question27: How many phases of the moon are there?, A: 4, B: 8, C: 12, D: 24, correct answer: "B", catagory: "science"}
    // {question28: Who was the first American to go into space?, A: Buzz Aldrin, B: Neil Armstrong, C: Alan Shephard, D: James Lovell, correct answer: "C", catagory: "science"}
    // {question29: The colored part of the human eye that controls how much light passes through the pupil is called?, A: Retina, B: Optic Nerve, C: Phakia, D: Iris, correct answer: "D", catagory: "science"}
    // {question31: What is the diameter of Earth?, A: Eight thousand miles, B: Twelve thousand miles, C: Sixteen thousand miles, D: Twenty thousand miles, correct answer: "A", catagory: "science"}
    // {question32: What is the largest bone in the human body?, A: Tibia, B: Femur, C: Humorus, D: Maxilla, correct answer: "B", catagory: "science"}
    // {question33: What is the symbol for potassium?, A: Pa, B: La, C: K, D: P, correct answer: "C", catagory: "science"}
    // {question34: What does space sound like?, A: A White Noise, B: Brown Noise, C: Gray Noise, D: Silence, correct answer: "D", catagory: "science"}
    // {question35: What part of the atom has no electric charge?, A: Electron, B: Neutron, C: Proton, D: Radius, correct answer: "B", catagory: "science"}
    // {question36: How many Earths could fit inside the sun?, A: 13 thousand, B: 13 hundred thousand, C: 1.3 million, D: 13 million, correct answer: "C", catagory: "science"}
    // {question37: What is the rarest blood type?, A: AB Negative, B: O Positive, C: O Negative, D: AB Positive, correct answer: "A", catagory: "science"}
    {question: 'What is the capital city of Spain?',
    answers: [
        {text: 'Cordoba', correct: false},
        {text: 'Valencia', correct: false},
        {text: 'Barcelona', correct: false},
        {text: 'Madrid', correct: true}
     ],
    catagory: "geography"},
    {question: 'Where would you find the worlds most ancient forest?',
    answers: [
        {text: 'California', correct: false},
        {text: 'Ethiopia', correct: false},
        {text: 'Australia', correct: true},
        {text: 'Ireland', correct: false}
     ],
    catagory: "geography"}
    // {question40: Kodiak island is in which US state?, A: Alaska, B: Washington, C: Michigan, D: Maine, correct answer: "A", catagory: "geography"}
    // {question41: What is the worlds largest ocean?, A: Indian, B: Atlantic, C: Pacific, D: Arctic, correct answer: "C", catagory: "geography"}
    // {question42: Zurich is the largest city in what country?, A: Germany, B: Switzerland, C: Prague, D: Poland, correct answer: "B", catagory: "geography"}
    // {question43: Which US city is known as the City of Brotherly Love?, A: New York City, B: Boston, C: Philadelphia, D: Baltimore, correct answer: "D", catagory: "geography"}
    // {question44: How many national parks are in the United States?, A: 58, B: 70, C: 108, D: 312, correct answer: "A", catagory: "geography"}
    // {question45: How many total time zones are there in the world?, A: 8, B: 12, C: 16, D: 24, correct answer: "D", catagory: "geography"}
    // {question46: How long is an eon in geology?, A: One Hundred thousand years, B: A million years, C: A billion years, D: Ten thousand years, correct answer: "C", catagory: "geography"}
    // {question47: Which African country was formerly known as Abyssinia?, A: Nigeria, B: Ivory Coast, C: Uganda, D: Ethiopia, correct answer: "D", catagory: "geography"}
    // {question48: What is the capital of India?, A: Kolkata, B: New Dheli, C: Mumbai, D: Ahmedabad, correct answer: "B", catagory: "geography"}
    // {question49: Area 51 is located in which US state?, A: California, B: New Mexico, C: Nevada, D: Utah, correct answer: "C", catagory: "geography"}
]

const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('nextButton')
const questionCard = document.getElementById('questionAnswer')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerButtons')

// let scoreRound = document.getElementById(roundOne)

let randomQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    randomQuestions = qaContent.sort(() => Math.random() - 0.5)
    currentQuestionsIndex = 0
    questionCard.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(randomQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText=question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}




// Create functionality to randomly generate the questions in the right round in the right order
    // create smooth transition to the next question
    // Create gate that doesn't allow users to next round unless they meet the qualifications    

// Create button functionality that when the right answer is selected it appears green and that result is tracked
// Create button functionality that when the wrong answer is selected it appears red and that result is tracked




// Create a place where the data from past answers is stored for all users per catagory, per round, and per user

// Create catagory data section
    // Create sports catagory tracking
    // Create history catagory tracking
    // Create music catagory tracking
    // Create geography catagory tracking

// Create round and global tracking
    // Create round 1 data tracking
    // Create round 2 data tracking
    // Create round 3 data tracking
    // Create dailt streak count
    // Create global percentile statistics

