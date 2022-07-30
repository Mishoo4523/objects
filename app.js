

const  book = {
    name: 'ben10',
    auther:'Mr-x',
    year:2022
}
bookdetails = book => {
return `the book : ${book.name} was written by ${book.auther} in year ${book.year}`
}
bookdetails(book);