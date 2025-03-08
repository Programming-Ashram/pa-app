function fetchmyData(){
    let api = new XMLHttpRequest();
    api.onload = function(){
        let convertData = JSON.parse(this.responseText);

        let data = document.getElementById('data');

        for(let i in convertData){
            data.innerHTML +=`
                <div class='col-md-3'>
                    <div class='card my-2></>
                </div>
            `
        }
    }
}