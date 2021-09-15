const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// NOTE the async declaration before the function. in order to use await you MUST put async before the function
const register = async (req, res, next) => {
  // pull body off of req
  const { body } = req;
  try {
    const queriedUser = await User.findOne({$or: [{ email: body.email }, { userName: body.userName }]});
    // if a user is found with this email, we must notify the client so the user can enter a different email address
    // this is the basics of registration... an email can only be used by one user
    if (queriedUser) {
      // return next(new Error("Email already in use"));
      res.status(400).json({ error: "User already registered" });
      // THis line below helps us exit out of the route without saving to db
      return;
    }
  } catch (err) {
    res.status(400).json(err);
  }
  // create new User instance
  const newUser = new User(body);
  try {
    const newUserObj = await newUser.save();
    res.json(newUserObj);
  } catch (error) {
    res.status(400).json(error);
  }
};

const login = async (req, res, next) => {
  const { body } = req;

  // Look for user trying to log in by email
  let userQuery;
  try {
    userQuery = await User.findOne({ userName: body.userName });
  } catch (err) {
    res.status(400).json(err);
  }
  // If query is null, the user was not found! So send client error message
  if (userQuery==null) {
    res.status(400).json({ err: "user not found" });
    return;
  }
  // Getting here means the user was found.
  // Next step is to check if the user entered login form password is same as hashed password from db
  // compareSync function returns true or false
  const passwordCheck = bcrypt.compareSync(body.password, userQuery.password);
  // if passwordCheck is false...
  if (!passwordCheck) {
    res.status(400).json({ err: "User or password does not match" });
    return;
  }
  // Getting to this block of code means 1. the email was found in db and
  // 2. the password the user entered is correct
  // So, we now need to create the token and send it to client as cookie
  // create JWT. jwt.sign will take a value like the mongoID and a secret key and
  // will create a long, encrypted token
  const userToken = jwt.sign({ id: userQuery._id }, process.env.SECRET_KEY);
  console.log("token:", userToken); // will print some insanely long, random string

  // 1st arg to .cookie: the name of the cookie that the client will store, here 'usertoken'
  // 2nd arg to .cookie: the token itself
  // 3rd arg to .cookie: the secret key
  // 4th arg: options - expires sets an expiration for the token so the client will become unauthorized after however long we enter
  res
    .cookie("usertoken", userToken, process.env.SECRET_KEY, {
      httpOnly: true,
      expires: new Date(Date.now() + 9000000),
    })
    // Also send json messages
    .json({ message: "success" });
};

const logout = (req, res) => {
  res.clearCookie("usertoken");
  res.json({ message: "logout successful" });
};

const displayCurrentUser = async(req, res)=>{
  const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
  const userId = decodedJwt.payload.id;
  try{
      const currentUser = await User.findOne({_id: userId})
      //.populate('cart.items.product_id');
      res.json(currentUser);
    } catch(error) {
      res.status(400).json(error);
  }
}

const displayCart = async(req, res)=>{
  const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
  const userId = decodedJwt.payload.id;
  try{
      const currentUser = await User.findOne({_id: userId})
      .populate('cart.items.product_id');
      res.json(currentUser.cart);
    } catch(error) {
      res.status(400).json(error);
  }
}

const addToCart = async(req, res) =>{
  const {body,params} = req;
  const cartProductIndex = body.cart.items.findIndex(cp => {
    return cp.product_id === params.product_id;
  });
  console.log(cartProductIndex)
  if (cartProductIndex >= 0) {
    let newQuantity = body.cart.items[cartProductIndex].quantity;
    body.cart.items[cartProductIndex].quantity = newQuantity + 1;
    } else {
          body.cart.items.push({product_id: params.product_id, quantity: 1})
    }
    try{
      const updatedUser = await User.findOneAndUpdate({_id: body._id}, body, {new: true, runValidators: true});
      res.json(updatedUser);
    } catch(error){
      res.status(400).json(error);
    }
}

const removeFromCart = async(req, res)=>{
  const {body, params} = req;
  const updatedCartItems = body.cart.items.filter(item => {
    return item.product_id !== params.product_id;
  });
  body.cart.items = updatedCartItems;
  try{
      const updatedUser = await User.findOneAndUpdate({_id: body._id}, body, {new: true, runValidators: true});
      res.json(updatedUser);
    } catch(error){
      res.status(400).json(error);
  }
}
/*
const increaseToCart = async(req, res)=>{
  const {body, params} = req;
  console.log(body);
  console.log(params);
  const cartProductIndex = currentUser.cart.items.findIndex(cp => {
    return cp.product_id === params.product_id;
  });

  let newQuantity = body.cart.items[cartProductIndex].quantity + 1;
  body.cart.items[cartProductIndex].quantity = newQuantity; 
  
  try{
      const updatedUser = await User.findOneAndUpdate({_id: body._id}, body, {new: true, runValidators: true});
      res.json(updatedUser);
    } catch(error){
      res.status(400).json(error);
  }
}
*/
const decreaseFromCart = async(req, res)=>{
  const {body, params} = req;
  const cartProductIndex = body.cart.items.findIndex(cp => {
    return cp.product_id === params.product_id;
  });

  let currQuantity = body.cart.items[cartProductIndex].quantity
  if(currQuantity >0){
    currQuantity -= 1; 
    body.cart.items[cartProductIndex].quantity = currQuantity;
  }

  try{
      const updatedUser = await User.findOneAndUpdate({_id: body._id}, body, {new: true, runValidators: true});
      res.json(updatedUser);
    } catch(error){
      res.status(400).json(error);
  }
}

const clearCart = async(req, res)=>{
  const {body} = req;
  body.cart = { items: [] };

  try{
      const updatedUser = await User.findOneAndUpdate({_id: body._id}, body, {new: true, runValidators: true});
      res.json(updatedUser);
    } catch(error){
      res.status(400).json(error);
  }
}

module.exports = {
  register,
  login,
  logout,
  displayCurrentUser,
  displayCart,
  addToCart,
  removeFromCart,
  //increaseToCart,
  decreaseFromCart,
  clearCart
}
