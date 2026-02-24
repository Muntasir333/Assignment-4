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
    currentStatus = id;
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
    stat.innerText = 'Interview'
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

    rejectedList = rejectedList.filter(item=> item.companyName != info.companyName)
     renderAppoint ();
    renderReject ();
    calculateCount();

}  
else if (event.target.id === 'rej-btn'){
           const parentN = event.target.parentNode.parentNode;
    const companyName = parentN.querySelector('.companyName').innerText;
    const position = parentN.querySelector('.position').innerText;
    const type = parentN.querySelector('.type').innerText;
    const status = parentN.querySelector('.status').innerText;
    const description = parentN.querySelector('.description').innerText;

    const stat = parentN.querySelector('.status');
    stat.innerText = 'Reject'
    stat.classList.add('text-[#EF4444]', 'border-[#EF4444]')

    const info = {
        companyName, 
        position, 
        type, 
        status, 
        description
    }
    const exist = rejectedList.find(item=> item.companyName == info.companyName);
    
    if(!exist){
        rejectedList.push(info);
    }
    interviewList = interviewList.filter(item=> item.companyName != info.companyName);
    renderReject ();
    renderAppoint ();
    calculateCount();
}  
else if (event.target.classList.contains('fa-trash-can')) {
    const card = event.target.closest('.flex');
    const companyName = card.querySelector('.companyName').innerText;

    interviewList = interviewList.filter(item=> item.companyName !== companyName);
    rejectedList = rejectedList.filter(item=> item.companyName !== companyName);

card.remove();
calculateCount();
}
})

 



function renderAppoint (){
    const recieved = document.getElementById('iRecieved');
    
    if (interviewList.length ==0){
        recieved.innerHTML = `  <div class="border p-8 flex justify-center items-center flex-col py-[100px] rounded-2xl">
            <img src="./jobs.png" alt="">
            <h1 class="text-[#002C5C] font-semibold text-[24px]">No Jobs Available</h1>
            <p class="text-[#64748B] font-normal text-[16px]">Check back soon for new job opportunities</p>
        </div>
        `
        return;
    }
    recieved.innerHTML='';

        for (let inter of interviewList){
            let div = document.createElement('div');
            div.className = 'flex justify-between border p-8 mb-8'
            div.innerHTML = `    <div>
                <h2 class="companyName text-[#002C5C] font-semibold text-[18px]">${inter.companyName}</h2>
                <p  class="position text-[#64748B] font-normal text-[16px]">${inter.position}</p>
                <br>
                <p  class="type text-[#64748B] font-normal text-[14px]">${inter.type}</p>
                <br>
                <p class="status border-[#10B981] bg-[#EEF4FF] w-[150px] h-[30px] pl-8 py-2 text-[#10B981] font-normal text-[14px]">Interview</p>
                <br>
                <p class="description text-[#323B49] font-normal text-[14px]">${inter.description}</p>
                <br>
                <div id="btn">
                    <button id="int-btn" class="text-[#10B981] btn border-[#10B981]">INTERVIEW</button>
                    <button id="rej-btn" class="btn text-[#EF4444] border-[#EF4444]">REJECTED</button>

                </div>
            </div>
            <div>
                <button class="cursor-pointer"> <i class="fa-regular fa-trash-can"></i></button>
            </div>
          `
          recieved.appendChild(div)
        }

}


 function renderReject (){
     const reject = document.getElementById('rRecieved')
    if (rejectedList.length ==0){
        reject.innerHTML = `  <div class="border p-8 flex justify-center items-center flex-col py-[100px] rounded-2xl">
            <img src="./jobs.png" alt="">
            <h1 class="text-[#002C5C] font-semibold text-[24px]">No Jobs Available</h1>
            <p class="text-[#64748B] font-normal text-[16px]">Check back soon for new job opportunities</p>
        </div>
        `
        return;
    }

    reject.innerHTML='';

        for (let rej of rejectedList){
            let div = document.createElement('div');
            div.className = 'flex justify-between border p-8 mb-8'
            div.innerHTML = `    <div>
                <h2 class="companyName text-[#002C5C] font-semibold text-[18px]">${rej.companyName}</h2>
                <p  class="position text-[#64748B] font-normal text-[16px]">${rej.position}</p>
                <br>
                <p  class="type text-[#64748B] font-normal text-[14px]">${rej.type}</p>
                <br>
                <p class="status border-[#EF4444] bg-[#EEF4FF] w-[150px] h-[30px] pl-8 py-2 text-[#EF4444] font-normal text-[14px]">Rejected</p>
                <br>
                <p class="description text-[#323B49] font-normal text-[14px]">${rej.description}</p>
                <br>
                <div id="btn">
                    <button id="int-btn" class="text-[#10B981] btn border-[#10B981]">INTERVIEW</button>
                    <button id="rej-btn" class="btn text-[#EF4444] border-[#EF4444]">REJECTED</button>

                </div>
            </div>
            <div>
               <button class="cursor-pointer"> <i class="fa-regular fa-trash-can"></i></button>
            </div>
          `
          reject.appendChild(div);
        }

}





