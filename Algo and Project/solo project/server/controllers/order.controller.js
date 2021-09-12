const Order = require("../models/order.model");
const jwt = require("jsonwebtoken");

const addOrder = (req, res)=>{
    const {body} = req; 
    //const user = await User.findOne({_id: body._id}).populate('cart.items.product_id').exec()
    const products = body.cart.items.map(item => {
            return { quantity: item.quantity, product: { ...item.product_id } };
          });
    const order = new Order({
          user_id: body._id,
          products: products
        });
    Order.create(order).then(order=>res.json(order)).catch(err => response.status(400).json(err))
}

const getAllOrders = (req, res) => {
      const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
      const userId = decodedJwt.payload.id;
      //const {body} = req;
      //const userId = body.user_id;
      //console.log(body)
      Order.find({user_id: userId})
      .then(orders=>{
        res.json(orders)
        console.log(orders)
      }).catch(error=>{
          res.status(400).json(error)
      })
  };

const recallOrder = (req, res) => {
    Order.deleteOne({ _id: req.params.order_id })
            .then(recallConfirmation => res.status(200).json(recallConfirmation))
            .catch(error => res.status(400).json(error))
}

module.exports = {
    addOrder,
    getAllOrders,
    recallOrder
  };