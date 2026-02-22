let total = document.getElementById('totalCount');
let totalInterview = document.getElementById('totalInterview');
let totalRejected = document.getElementById('totalRejected');



//  array 
let interviewArray = [];
let rejectedArray = [];
// console.log(total,totalInterview,totalRejected);

const allCards = document.getElementById('all-cards')
// console.log(allCards.children.length);

const mainContainer = document.querySelector('main')
// console.log(mainContainer);


function TotalCountNumber() {
    total.innerText = allCards.children.length;

    totalInterview.innerText = interviewArray.length
    totalRejected.innerText = rejectedArray.length


}



/* toggle */
const allBtn = document.getElementById("allBtn")
const interviewBtn = document.getElementById("interviewBtn")
const rejectedBtn = document.getElementById("rejectedBtn")

function toggleBtn(id) {


    allBtn.classList.add('bg-white', 'text-black')
    interviewBtn.classList.add('bg-white', 'text-black')
    rejectedBtn.classList.add('bg-white', 'text-black')

    allBtn.classList.remove('bg-blue-500', 'text-white')
    interviewBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedBtn.classList.remove('bg-blue-500', 'text-white')

    const selectedId = document.getElementById(id)

    selectedId.classList.add('bg-blue-500', 'text-white')
    selectedId.classList.remove('bg-white', 'text-black')



}



mainContainer.addEventListener('click', function (e) {
    // console.log();/
    const parentNodes = e.target.parentNode.parentNode;
    const companyName = parentNodes.querySelector(".company-title").innerText
    const position = parentNodes.querySelector(".position").innerText
    const salary = parentNodes.querySelector(".salary").innerText
    const applied = parentNodes.querySelector(".applied").innerText
    const description = parentNodes.querySelector(".description").innerText

    const allInfo = {

        companyName,
        position,
        salary,
        applied,
        description
    }
    console.log(allInfo);
    
})














TotalCountNumber();