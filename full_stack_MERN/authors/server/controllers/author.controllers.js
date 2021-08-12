const Author = require('../models/author.model')
/*
module.exports.index = (request, response) => {
    response.json({
       message: "Welcome to Product Manager page."
    });
}
*/
 /* The method below is new */
 module.exports= {
    createAuthor: (request, response) => {
        const { name } = request.body;
        Author.create({name: name})
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err))
    },
    getAllAuthors: (request, response) => {
        Author.find({})
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err))
    },
    getAuthor: (request, response) => {
        Author.findOne({_id:request.params.id})
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err))
    },
    updateAuthor: (request, response) => {
        Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
            .then(updatedAuthor => response.json(updatedAuthor))
            .catch(err => response.status(400).json(err))
    },
    deleteAuthor: (request, response) => {
        Author.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.status(400).json(err))
    }
 } 
