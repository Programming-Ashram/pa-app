function fetchAPI(){
    let server = new XMLHttpRequest();
    let data = document.getElementById('data');
    server.onload = function(){
        let convert = JSON.parse(this.responseText)
        for(let i of convert){
            data.innerHTML+=`
                <div class='col-md-3'>
                    <div class='card'>
                        <div class='card-body'>
                            <h4>${i.name}</h4>
                            <p>${i.body}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    server.open("https://jsonplaceholder.typicode.com/comments")
    server.send();
}
fetchAPI()