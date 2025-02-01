// clouser
// global scope
let x = 10;
function calculator(){
    // local scope
    // let x = 10;
    function sub(){
        console.log(x - 6);

        function add(){
            console.log(x + 6);
        }
        add();
    }sub()
}calculator()

function siblingFn(){
    console.log(x);
}
siblingFn();

// call back function
function template(getData){
    document.writeLn {"Hello My Name Is"+ getData};
}

function work(fname, lname, myCallBack){
    // fetch data
    let fetchData = `${fname} ${lname}`;
    // template()
    myCallBack(fetchData);
}

work("Jeeshan", "Shaikh", template);

function testResult(prpos){
    console.log(prpos);
}