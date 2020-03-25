import Ong from '../models/Ong';
import crypto from 'crypto';

class OngController {
  async store(req, res) {
    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   email: Yup.string()
    //     .email()
    //     .required(),
    //   password: Yup.string()
    //     .min(6)
    //     .required(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Schema validation fails' });
    // }

    // const ongExists = await Ong.findOne({
    //   where: { email: req.body.email }
    // });
    // if (ongExists) {
    //   return res.status(400).json({
    //     error: 'Ong already exists.'
    //   });
    // }

    try {
      const id = crypto.randomBytes(4).toString('HEX');
      const { name, email, whatsapp, city, uf } = req.body;

      const ong = await Ong.create({ id, name, email, whatsapp, city, uf });

      return res.json(ong);
    } catch (error) {
      console.error(error);
    }
  }
  async index(req, res) {
    try {
      const ongs = await Ong.findAll();

      return res.json(ongs);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new OngController();
