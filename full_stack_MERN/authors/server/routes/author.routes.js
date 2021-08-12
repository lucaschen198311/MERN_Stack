const AuthorController = require('../controllers/author.controllers');
module.exports = function(app){
    app.get('/api', AuthorController.getAllAuthors);
    app.get('/api/:id', AuthorController.getAuthor);
    app.post('/api/new', AuthorController.createAuthor);
    app.put('/api/:id', AuthorController.updateAuthor);
    app.delete('/api/:id', AuthorController.deleteAuthor);
}

