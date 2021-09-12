# Today's Lecture: One To Many Relationships with mongoose, authenticated/protected routes, MERN auth, interview tip

- **_ DELETE AMAZON EC2 INSTANCES!!!!! _**
- Housekeeping
- Exams
- Go over code from Tuesday

# Housekeeping

# Exams

# auth server code from Tuesday

- Take a bit of time and explain the code again
- Show where I was wrong
- logout
- Go through client code for Register, Login, logout

# Protected/Authenticated Route

- basic post model
- jwt diagram
- create basic post model in server
- Create jwt middleware function
- Connect to addNewPost route
- client PostForm
- dealing with different errors in PostForm

# One-To-Many with mongoose

- check out mongodb docs pertaining to relationships: https://docs.mongodb.com/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/
  - embeds vs references

# Interview Tip

- Build a full stack app with relationships between mongo collections
- Then, in an interview, you could say...
- "Building an app with mongodb really helped me understand why mongodb is considered so flexible in relation to SQL.
  You can model the relationships in NoSQL in at least two different ways, with embeds and references. The developer or development team can choose which method of relating collections to each other best fits the requirements for their product. And there is no tangible configuration after altering the documents in your collection. With SQL, there is ONLY ONE way to properly relate your tables to each other, and there is likely to be some config overhead after changing tables, especially if you are changing the relationships between tables. I really enjoyed this flexibility that mongodb provides and I can see why mongodb is so useful in an agile development environemnt: because you have so much flexibility with changing your database throughout sprint cycles."
- Recruiters will eat this up, so will tech hiring managers
- My realistic explanation of the motives of a tech recruiter
- You need to have more than just your "elevator pitch" memorized... find nuiances in the techsyou are using
  and memorize lines about them. It helps you appear more competent
- Learn from my horrible interview mistakes
  - **_ DO NOT CRAM THE NIGHT BEFORE AND GET AN AWFUL NIGHT'S SLEEP! _**
  - **_ DO NOT CRAM THE NIGHT BEFORE AND GET AN AWFUL NIGHT'S SLEEP! _**
  - **_ DO NOT CRAM THE NIGHT BEFORE AND GET AN AWFUL NIGHT'S SLEEP! _**
  - much better for your mental health to practice algorithms a few hours per week
  - CodeWars has worked extremely well for me.
  - Build games that you play through the terminal to really learn how to just "code"
    - Write some unit tests. DO NOT USE ANY OTHER JAVASCRIPT TEST FRAMEWORK OTHER THAN JEST. I BEG YOU
