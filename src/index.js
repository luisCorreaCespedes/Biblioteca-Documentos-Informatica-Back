import app from "./app.js";
import { connectDB } from "./db.js";

const port = process.env.PORT || 3000;

connectDB();
app.listen(port);
app.get('/', (req, res) => {
    res.end('it works!');
});
console.log('Server on port', port)