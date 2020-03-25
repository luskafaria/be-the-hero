import Ong from '../models/Ong';

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ong = await Ong.findOne({ where: { id } });

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this id' });
    }

    return res.json(ong);
  }
}

export default new SessionController();
