// example user doc
const user = {
  firstName: "Henry",
  lastName: "Ford",
  email: "henryford@gmail.com",
  password: "jf904unt90348t90384t908ojsdj", // hashed password
  _id: "98h34hi3h5jklh5hj", // mongoId
};

const post = {
  title: "My post",
  text: "blah blah blah",
  _id: "j09j09j09j0j09j09j09",
};

const postRefUser = {
  title: "My post",
  text: "dfasdfa",
  _id: "ji09j09j9j09j", // mongo _id
  user_id: "jf94j09j90j09j90", // mongo _id
};

const userEmbedPost = {
  firstName: "Henry",
  lastName: "Ford",
  email: "henryford@gmail.com",
  password: "jf904unt90348t90384t908ojsdj", // hashed password
  _id: "98h34hi3h5jklh5hj", // mongoId
  posts: [
    { title: "dgfdaf", text: "dfasfa", _id: "j90j90j09j09j" },
    { title: "dfasdfasf", text: "ffasdfasfa", _id: "fjlkdjflkj" },
  ],
};
