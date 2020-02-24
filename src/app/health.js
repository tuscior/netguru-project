const getHealth = () => 'OK';
const getVersion = ({ version }) => () => version;

module.exports = {
  getHealth,
  getVersion,
};
