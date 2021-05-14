const {limitList} = require("./home.js")

function findAuthorById(authors, id) {
  return authors.find((author)=> author.id == id)
}

function findBookById(books, id) {
return books.find((book)=> book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let borrowed = books.filter((book) => book.borrows[0].returned == false)
  let retained = books.filter((book) => book.borrows[0].returned == true)
  result = [borrowed, retained]
  return result
}
// function getBorrowersForBook(book, accounts) {
//   let result = []
//   accounts.forEach((account) => {
//     if (book.borrows.some((borrow) => borrow.id === account.id)){
//       const first = account
//       console.log(first)
//       book.borrows.forEach((borrow) => {
//         if(borrow.id === account.id) {
//           let {returned} = borrow
//           const final = {...first, returned}
//           result.push(final)
//         }
//       })
//     }
//   })
//   return limitList(result, 10)
// }

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
//console.log(account)
    acc[account.id] = account;
   // console.log(acc)
    return acc
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
  
};
