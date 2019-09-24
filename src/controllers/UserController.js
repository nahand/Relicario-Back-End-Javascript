const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async store(req, res) {
    const { email } = req.body

    try {
      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'error 1' })

      const user = await User.create(req.body)

      user.password = undefined

      return res.send({ user })
    } catch (err) {
      return res.status(400).send({ error: 'error 2' })
    }
  },

  async auth(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user)
      return res.status(400).send({ error: 'usuario de crack não encontrado' })

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({ error: 'senha nao é encontrada' })

    res.send({ user })
  }
}