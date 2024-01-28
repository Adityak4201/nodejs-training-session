const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
];

const UserService = {
  getUsers: async () => {
    return users;
  },

  createUser: async (user) => {
    users.push(user);
    return users;
  },

  updateUser: async (id, user) => {
    const index = users.findIndex((u) => u.id === id);
    users[index] = user;
    return users;
  },
};
