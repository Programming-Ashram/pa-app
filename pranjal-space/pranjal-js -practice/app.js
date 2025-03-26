let book =[
    {
        bookname: 'Deep Work',
        bookprice: '500',
        bookauthor: 'Cal newport',
    }
]
console.log(book)
class Book{
    constructor(bookname, bookprice, bookauthor){
        this.bookname = bookname;
        this.booksprice = bookprice;
        this.bookauthor = bookauthor;
    }
}
let book1 = new Book("Do Epic Shit","700","Ankur Warikooo");

console.log(book1);
try{
    let bookName = "newPort";
    if(carName === "Deep Work"){
        console.log('this book is Do Epic Shit')
    }
    else{
        throw new Error("This is not Deep Work");
    }
}  catch (error) {
    console.log(error);
}finally{
    console.log("now we have Deep Work")
}