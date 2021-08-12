const ProdMan = require('../models/prodman.model')
module.exports.index = (request, response) => {
    response.json({
       message: "Welcome to Product Manager page."
    });
}

 /* The method below is new */
 module.exports.createPM = (request, response) => {
    const { title, price, description } = request.body;
    ProdMan.create({
        title,
        price,
        description
    })
        .then(pm => response.json(pm))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPM = (request, response) => {
    ProdMan.find({})
        .then(pms => response.json(pms))
        .catch(err => response.json(err))
}

module.exports.getPM = (request, response) => {
    ProdMan.findOne({_id:request.params.id})
        .then(pm => response.json(pm))
        .catch(err => response.json(err))
}

module.exports.updatePM = (request, response) => {
    ProdMan.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPM => response.json(updatedPM))
        .catch(err => response.json(err))
}

module.exports.deletePM = (request, response) => {
    ProdMan.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}