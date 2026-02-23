let total = document.getElementById('totalCount');
let totalInterview = document.getElementById('totalInterview');
let totalRejected = document.getElementById('totalRejected');



//  array 
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'
// console.log(total,totalInterview,totalRejected);

const allCards = document.getElementById('all-cards')
const mainContainer = document.querySelector('main')


function TotalCountNumber() {
    total.innerText = allCards.children.length;
    totalInterview.innerText = interviewList.length
    totalRejected.innerText = rejectedList.length


}



/* toggle */
const allBtn = document.getElementById("allBtn")
const interviewBtn = document.getElementById("interviewBtn")
const rejectedBtn = document.getElementById("rejectedBtn")

function toggleBtn(id) {
    const selectedId = document.getElementById(id)
    currentStatus = id

    allBtn.classList.add('bg-white', 'text-black')
    interviewBtn.classList.add('bg-white', 'text-black')
    rejectedBtn.classList.add('bg-white', 'text-black')

    allBtn.classList.remove('bg-blue-500', 'text-white')
    interviewBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedBtn.classList.remove('bg-blue-500', 'text-white')


    selectedId.classList.add('bg-blue-500', 'text-white')
    selectedId.classList.remove('bg-white', 'text-black')

    if (id == 'interviewBtn') {
        allCards.classList.add('hidden')
        interviewSection.classList.remove("hidden")
    } else if (id == "allBtn") {
        allCards.classList.remove("hidden")
        interviewSection.classList.add('hidden')
    } else if (id == 'rejectedBtn') {
        allCards.classList.add('hidden')
        interviewSection.classList.remove("hidden")
        renderingRejected()
    }

}



mainContainer.addEventListener('click', function (e) {
    // console.log(e.target.classList.contains('interview-btn-click'));
    // console.log(e.target.classList.contains('rejected-btn-click'));

    if (e.target.classList.contains('interview-btn-click')) {
        const parentNodes = e.target.parentNode.parentNode;
        const companyName = parentNodes.querySelector(".company-title").innerText
        const position = parentNodes.querySelector(".position").innerText
        const salary = parentNodes.querySelector(".salary").innerText
        const applied = parentNodes.querySelector(".applied").innerText
        const description = parentNodes.querySelector(".description").innerText
        parentNodes.querySelector(".applied").innerText = 'Interview'
        const allInfo = {
            companyName,
            position,
            salary,
            applied: "Interview",
            description
        }
        // console.log(allInfo);

        let existName =
            interviewList.find(item => item.companyName == allInfo.companyName)


        if (!existName) {
            interviewList.push(allInfo)
        }

        rejectedList = rejectedList.filter(item => item.companyName != allInfo.companyName)

        renderingInterview()
        TotalCountNumber()

    } else if (e.target.classList.contains('rejected-btn-click')) {


        const parentNodes = e.target.parentNode.parentNode;
        const companyName = parentNodes.querySelector(".company-title").innerText
        const position = parentNodes.querySelector(".position").innerText
        const salary = parentNodes.querySelector(".salary").innerText
        // const applied = parentNodes.querySelector(".applied").innerText
        const description = parentNodes.querySelector(".description").innerText
        parentNodes.querySelector(".applied").innerText = 'Rejected'
        const allInfo = {
            companyName,
            position,
            salary,
            applied: "Rejected",
            description
        }

        const existName =
            rejectedList.find(item => item.companyName == allInfo.companyName)


        if (!existName) {
            rejectedList.push(allInfo)
        }
        interviewList = interviewList.filter(item => item.companyName != allInfo.companyName)
        if(currentStatus == 'interviewBtn'){
            renderingInterview();
            // renderingRejected()
        }

        // renderingRejected()
        TotalCountNumber()

    }
})
/*  */


/*  */
const interviewSection = document.getElementById('interview-section');
// const rejectedSection = document.getElementById("rejected-section")

function renderingInterview() {
    interviewSection.innerHTML = ''

    for (let inter of interviewList) {

        let div = document.createElement('div')
        div.className = `class="flex justify-between  shadow mb-5  p-5 "`


        div.innerHTML = `
        <div class="space-y-3">
                        <h3 class="company-title text-xl font-medium text-[#002C5C]">${inter.companyName}</h3>
                        <p class="position text-[#64748B]">${inter.position}</p>
                        <p class="salary text-[#64748B]">${inter.salary}</p>
                        <p class="applied bg-[#d2ddf3] w-[150px] rounded text-center text-[#002C5C] ">${inter.applied}</p>
                        <p class="description text-[#64748B]">${inter.description}</p>
                        <div>
                            <button
                                class="interview-btn-click shadow border border-green-500 px-3 py-1 rounded text-green-400">Interview</button>
                            <button
                                class="rejected-btn-click shadow border border-red-500 px-3 py-1 rounded text-red-500">Rejected</button>
                        </div>
        `
        interviewSection.appendChild(div)
    }
}
/*  */
function renderingRejected() {
    interviewSection.innerHTML = ''

    for (let reject of rejectedList) {

        let div = document.createElement('div')
        div.className = `class="flex justify-between  shadow mb-5  p-5 "`


        div.innerHTML = `
        <div class="space-y-3">
                        <h3 class="company-title text-xl font-medium text-[#002C5C]">${reject.companyName}</h3>
                        <p class="position text-[#64748B]">${reject.position}</p>
                        <p class="salary text-[#64748B]">${reject.salary}</p>
                        <p class="applied bg-[#d2ddf3] w-[150px] rounded text-center text-[#002C5C] ">${reject.applied}</p>
                        <p class="description text-[#64748B]">${reject.description}</p>
                        <div>
                            <button
                                class="interview-btn-click shadow border border-green-500 px-3 py-1 rounded text-green-400">Interview</button>
                            <button
                                class="rejected-btn-click shadow border border-red-500 px-3 py-1 rounded text-red-500">Rejected</button>
                        </div>
        `
        interviewSection.appendChild(div)
    }
}