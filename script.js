document.addEventListener('DOMContentLoaded', function() {
    const EnglishInput = document.getElementById('english')
    EnglishInput.defaultValue = 0
    const MathsInput = document.getElementById('maths')
    MathsInput.defaultValue = 0
    const PhysicsInput = document.getElementById('physics')
    PhysicsInput.defaultValue = 0
    const ChemistryInput = document.getElementById('chemistry')
    ChemistryInput.defaultValue = 0
    const ComputerInput = document.getElementById('computer')
    ComputerInput.defaultValue = 0

const Total = document.getElementById('total')
const Average = document.getElementById('average')
const Grade = document.getElementById('grade')

const CalculateButton = document.getElementById('calculate')

CalculateButton.addEventListener('click', function() {
    const englishvalue = parseInt(EnglishInput.value)
    const mathsvalue = parseInt(MathsInput.value)
    const physicsvalue = parseInt(PhysicsInput.value)
    const chemistryvalue = parseInt(ChemistryInput.value)
    const computervalue = parseInt(ComputerInput.value)

    if(englishvalue < 0 || englishvalue > 100 ||
        mathsvalue < 0 || mathsvalue > 100 ||
        physicsvalue < 0 || physicsvalue > 100 ||
        chemistryvalue < 0|| chemistryvalue > 100 ||
        computervalue < 0 || computervalue > 100) {
            alert('Please enter a valid Input')
        }

    const total = englishvalue + mathsvalue + physicsvalue + chemistryvalue + computervalue
    Total.textContent = `Total Marks: ${total}`

    const average = total/5
    Average.textContent = `Your Average marks are ${average}`

    let grade;
    if (average < 60 || englishvalue <= 35 || mathsvalue <= 35 || physicsvalue <= 35 || chemistryvalue <= 35 || computervalue <= 35) {
        grade = 'F'
    }else if (average >= 90) {
        grade = 'A'
    } else if (average >= 80 && average < 90) {
        grade = 'B'
    } else if (average >= 70 && average < 80) {
        grade = 'C'
    } else if (average >= 60 && average < 70) {
        grade = 'D'
    }
    Grade.textContent = `You Got ${grade} Grade`
})


})