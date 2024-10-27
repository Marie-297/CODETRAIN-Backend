exports.getAllBooks = (req,res) => {
  res.send("Get all books")
};

exports.getBookById = (req,res) => {
  res.send(`Get book by id: ${req.params.id}`)
};

exports.addBook = (req,res) => {
  res.send(`Add book: ${JSON.stringify(req.body)}`)
};

exports.updateBook = (req,res) => {
  res.send(`Update book by id: ${req.params.id}, new data: ${JSON.stringify(req.body)}`)
};

exports.deleteBook = (req,res) => {
  res.send(`Delete book by id: ${req.params.id}`)
};