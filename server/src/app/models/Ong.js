import Sequelize, { Model } from 'sequelize';

class Ong extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING(2)
      },
      {
        sequelize
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Incident, {
      foreignKey: 'id',
      as: 'incidents'
    });
  }
}

export default Ong;
