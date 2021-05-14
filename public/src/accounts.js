function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id == id)
  return result
}

function sortAccountsByLastName(accounts) {
accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1)
return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  books.forEach(({borrows}) =>{
    borrows.forEach(({id}) => {if (id == account.id) total ++})
  })
  return total
}


function getBooksPossessedByAccount(account, books, authors){
  let possess = []
  books.forEach((book) => {
    if(book.borrows[0].returned == false && book.borrows[0].id == account.id){
      const recent = book
      const author = authors.find((author) => author.id == book.authorId)
      const overall = {...recent, author}
      possess.push(overall)
    }
  })
  return possess
  
}




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
