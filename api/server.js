const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });
const config = require('./config');
const app = require('./app');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
