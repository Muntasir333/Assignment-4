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


const mainContainer = document.querySelector('main');
mainContainer.addEventListener('click', function(event){
if (event.target.id === 'int-btn'){
       const parentN = event.target.parentNode.parentNode;
    const companyName = parentN.querySelector('.companyName').innerText;
    const position = parentN.querySelector('.position').innerText;
    const type = parentN.querySelector('.type').innerText;
    const status = parentN.querySelector('.status').innerText;
    const description = parentN.querySelector('.description').innerText;

    const stat = parentN.querySelector('.status');
    stat.innerText = 'INTERVIEW'
    stat.classList.add('border-[#10B981]', 'text-[#10B981]')

    const info = {
        companyName, 
        position, 
        type, 
        status, 
        description
    }
    const exist = interviewList.find(item=> item.companyName == info.companyName);
    
    if(!exist){
        interviewList.push(info);
    }
    calculateCount()
  renderAppoint ()
}  
})

 

const recieved = document.getElementById('iRecieved')

function renderAppoint (){

    recieved.innerHTML='';

        for (let inter of interviewList){
            console.log(inter);
            let div = document.createElement('div');
            div.className = 'flex justify-between border p-8 mb-8'
            div.innerHTML = `    <div>
                <h2 class="companyName text-[#002C5C] font-semibold text-[18px]">${inter.companyName}</h2>
                <p  class="position text-[#64748B] font-normal text-[16px]">${inter.position}</p>
                <br>
                <p  class="type text-[#64748B] font-normal text-[14px]">${inter.type}</p>
                <br>
                <p class="status border-[#10B981] bg-[#EEF4FF] w-[150px] h-[30px] pl-8 py-2 text-[#10B981] font-normal text-[14px]">INTERVIEW</p>
                <br>
                <p class="description text-[#323B49] font-normal text-[14px]">${inter.description}</p>
                <br>
                <div id="btn">
                    <button id="int-btn" class="text-[#10B981] btn border-[#10B981]">INTERVIEW</button>
                    <button id="rej-btn" class="btn text-[#EF4444] border-[#EF4444]">REJECTED</button>

                </div>
            </div>
            <div>
                <i class="fa-regular fa-trash-can"></i>
            </div>
          `
          recieved.appendChild(div)
        }

}
