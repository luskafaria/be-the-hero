module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'hero',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
