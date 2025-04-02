let userinput,list;
userinput = document.getElementById("userinput");
list = document.getElementById("list");


let array = [];
function addtodos() {
    let array =[];
    let newArray = array.push(userinput.value);

//read
    for(let i = 0; i <array.length; i++){
        list.innerHTML +=`
        <li><span class="textData">${array[i]}</span><button type="button" class="btn">Delete</button></li>
        `;
//update
        let textData = document.querySelectorAll('.textData');
        textData.forEach(i =>{
            i.addEventListener('dblclick',()=>{
                i.contentEditable = true;
            })
        });

//Delete
let btn = document.querySelectorAll('.btn');
btn.forEach(i =>{
    i.addEventListener('click',()=>{
        i.parentElement.style.display = "none";
    })
});



        

    }
}
