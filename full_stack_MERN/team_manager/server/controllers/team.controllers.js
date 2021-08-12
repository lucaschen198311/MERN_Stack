const Team = require('../models/team.model')

 /* The method below is new */
 module.exports= {
    createPlayer: (request, response) => {
        const { name, position } = request.body;
        Team.create({name: name, position:position})
            .then(player => response.json(player))
            .catch(err => response.status(400).json(err))
    },
    getAllPlayers: (request, response) => {
        Team.find({})
            .then(player => response.json(player))
            .catch(err => response.status(400).json(err))
    },
    getPlayer: (request, response) => {
        Team.findOne({_id:request.params.id})
            .then(player => response.json(player))
            .catch(err => response.status(400).json(err))
    },
    updatePlayer: (request, response) => {
        Team.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
            .then(updatedPlayer => response.json(updatedPlayer))
            .catch(err => response.status(400).json(err))
    },
    deletePlayer: (request, response) => {
        Team.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.status(200).json(deleteConfirmation))
            .catch(err => response.status(400).json(err))
    }
 } 
