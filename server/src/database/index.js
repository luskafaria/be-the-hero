import Sequelize from 'sequelize';

import Ong from '../app/models/Ong';
import Incident from '../app/models/Incident';

import databaseConfig from '../config/database';

const connection = new Sequelize(databaseConfig);

Ong.init(connection);
Incident.init(connection);

Ong.associate(connection.models);
Incident.associate(connection.models);


// const models = [Ong, Incident];


// class Database {
//   constructor() {
//     this.init();
//     this.associate();
//   }

//   init() {
//     this.connection = new Sequelize(databaseConfig);

//     models.map(model => model.init(this.connection));
//   }

//   associate() {
//     this.connection = new Sequelize(databaseConfig);

//     models.map(model => model.associate(this.connection.models));
//   }
// }

export default connection;
