import bcrypt from "bcryptjs";

const users = [
  {
    name: "Amit Lekhak",
    email: "amit@gmail.com",
    password: bcrypt.hashSync("111111", 10),
    isAdmin: true,
  },
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
