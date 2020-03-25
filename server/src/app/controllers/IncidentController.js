import Incident from '../models/Incident';

class IncidentController {
  async store(req, res) {
    try {
      const ong_id = req.headers.authorization;

      const { title, description, value } = req.body;

      const { id } = await Incident.create({
        title,
        description,
        value,
        ong_id
      });

      return res.json({ id });
    } catch (error) {
      console.error(error);
    }
  }
  async index(req, res) {
    try {
      const { page = 1 } = req.query;

      const { count } = await Incident.findAndCountAll();

      const incidents = await Incident.findAll({
        include: {
          association: 'ong',
          attributes: ['name', 'email', 'whatsapp', 'city', 'uf']
        },
        limit: 5,
        offset: (page - 1) * 5
      });

      res.header('X-Total-Count', count);

      return res.json(incidents);
    } catch (error) {
      console.error(error);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const ong_id = req.headers.authorization;

      const incident = await Incident.findOne({ where: { id } });

      if (incident.ong_id !== ong_id) {
        return res.status(401).json({ error: 'Operation not authorized' });
      }

      await Incident.destroy({ where: { id } });

      const incidents = await Incident.findAll();

      return res.status(204).json({ incidents });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new IncidentController();
