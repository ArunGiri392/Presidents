let presidents = [];
fetch("https://api.sampleapis.com/presidents/presidents")
       .then(response =>{
          return response.json();
        })

       .then (data =>{
           presidents = data;
           renderdata(presidents);
        
        });


const searchInput = document.querySelector('#btn-search');
    searchInput.addEventListener('click',()=>{
        let filteredList = filterByName();
        renderdata(filteredList);
        
    })

function filterByName(){
    let userInput = document.querySelector('.form-control').value;
    let filterarray = [];
    if (userInput){
        // console.log(true);
        presidents.forEach(president=>{
            // console.log(hero.name);
            if( (president.name.toLowerCase()).includes(userInput.toLowerCase())){
                filterarray.push(president);
            }
        });
        
        return filterarray;
    }

}



function renderdata(data){
    
    let html = '';
    data.forEach(president=>{
        let htmlSegment = `<div class="col">
        <div class="card">
            <img src="${president.photo}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${president.name}</h5>
                <p class="card-text">Years in Office: ${president.yearsInOffice}</p>
            </div>
        </div>
    </div>`;
        html += htmlSegment;

    });
    let container = document.querySelector('#superhero-grid');
    container.innerHTML = html;
    

}