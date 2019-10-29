/* Entry Point
 * Author: Miguel Solans
 */
const app     = require('./config/server');
const PORT    = process.env.PORT || 3007;

app.listen(PORT, () => console.log(`Magic Port ${PORT}`));