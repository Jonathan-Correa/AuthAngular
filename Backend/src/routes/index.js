const users = require("./user.routes");

module.exports = (app) => {

	users(app);
}