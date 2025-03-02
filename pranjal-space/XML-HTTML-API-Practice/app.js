function fetchmyData(){
    let getapi = new XMLHttpRequest();
    getapi.onload = function(){
        let convertData = JSON.parse(this.responseText);
        let data = document.getElementById('data');
        for(let i in convertData){
            data.innerHTML +=`
                <div class='col-md-3'>
                    <div class='card my-2 ${(convertData[i].completed == true) ? "bg-success-subtle":'bg-warning-subtle'}'>
                        <h3>${convertData[i].id}</h3>
                        <i class="fa-solid ${convertData[i].completed == true ? 'fa-check-circle':'fa-times-circle'}"></i>
                    </div>
                    <p>${convertData[i].title}</p>
                </div>
            `;
        }
    }
    api.open("GET", "https://jsonplaceholder.typicode.com/posts");
    api.send();

}fetchmyData()