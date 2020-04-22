const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
  }
]

// http://localhost:5000/users
app.get('/users', (req, res) => {
  res.json(users)
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
})