const UserController = {
  getAll: async (req, res) => {
    console.log("Get all users", __dirname);
    return res.status(200).json({
      msg: "Get all users",
      users,
    });
  },

  create: async (req, res) => {
    console.log("Create user");
    const { name, id } = req.body;
    if (!name || !id) {
      return res.status(400).json({
        msg: "Name and email are required",
      });
    }
    const user = {
      name,
      id,
    };
    await UserService.createUser(user);
    return res.status(201).json({
      msg: "User created",
      user,
    });
  },

  update: async (req, res) => {
    console.log("Update user");
    const { name } = req.body;
    const { id } = req.params;
    if (!name) {
      return res.status(400).json({
        msg: "Name is required",
      });
    }
    const user = {
      name,
      id,
    };
    await UserService.updateUser(id, user);
    return res.status(200).json({
      msg: "User updated",
      user,
    });
  }
};

export default UserController;
