let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let count = document.getElementById('count');

const allCardSection = document.getElementById('card')

function calculateCount (){
    total.innerText = allCardSection.children.length;
    count.innerText = allCardSection.children.length + ' ' + 'jobs';
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
calculateCount();






function toggle(id){
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');

 
    allBtn.classList.add('bg-gray-100', 'text-black');
    interviewBtn.classList.add('bg-gray-100', 'text-black');
    rejectedBtn.classList.add('bg-gray-100', 'text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-100', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
}


function show(id){
    const all = document.getElementById('card')
    const recieved = document.getElementById('iRecieved')
    const reject = document.getElementById('rRecieved')

    all.classList.add('hidden');
    recieved.classList.add('hidden');
    reject.classList.add('hidden');

    const select = document.getElementById(id);
    select.classList.remove('hidden');
}


// const mainContainer = document.querySelector('main');

