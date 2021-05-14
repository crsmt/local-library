function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book) => book.borrows[0].returned == false)
  return result.length
}

function getMostCommonGenres(books) {
  let result = []
  books.forEach((book) => {
    let name = book.genre 
    if(!result.some((check) => check.name == name)) {
      let count = 1
      let container = {name, count}
      result.push({...container})
    }
    else{
      result.forEach((check) => {
        if(check.name == name) check.count++ 
      })
    }
  })
  result.sort((itemA, itemB) => itemB.count - itemA.count)
  return limitList(result, 5)
}

function getMostPopularBooks(books) {
  let result = books.reduce((acc,book) => {
    let name = book.title
    let count = book.borrows.length
    acc.push({name, count})
    return acc
  }, [])
  result.sort((itemA, itemB) => itemB.count - itemA.count)
  return limitList(result, 5)
}

function getMostPopularAuthors(books, authors) {
  let result = authors.map((author) =>{
    let name = `${author.name.first} ${author.name.last}`
    let count = 0
    books.forEach((book) => {
      if(book.authorId == author.id) count = book.borrows.length
    })
    let container = {name, count}
    return {...container}
  })
  result.sort((itemA, itemB) => itemB.count - itemA.count)
  return limitList(result, 5)
}


function limitList(list, most){
  let result = []
  for (let i = 0; 1 <most; i++){
    result.push(list[i])
  }
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
