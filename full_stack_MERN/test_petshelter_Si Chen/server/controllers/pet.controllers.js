const Pet = require('../models/pet.model')

 /* The method below is new */
 module.exports= {
    createPet: (request, response) => {
        const { name, type, description, skill1, skill2, skill3 } = request.body;
        Pet.create({name: name, 
                    type: type, 
                    description: description, 
                    skill1: skill1,
                    skill2: skill2,
                    skill3: skill3})
            .then(pet => response.json(pet))
            .catch(err => response.status(400).json(err))
    },
    getAllPets: (request, response) => {
        Pet.find({}).sort('type')
            .then(pets => response.json(pets))
            .catch(err => response.status(400).json(err))
    },
    getPet: (request, response) => {
        Pet.findOne({_id:request.params.id})
            .then(pet => response.json(pet))
            .catch(err => response.status(400).json(err))
    },
    updatePet: (request, response) => {
        Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
            .then(updatedPet => response.json(updatedPet))
            .catch(err => response.status(400).json(err))
    },
    deletePet: (request, response) => {
        Pet.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.status(200).json(deleteConfirmation))
            .catch(err => response.status(400).json(err))
    }
 } 
