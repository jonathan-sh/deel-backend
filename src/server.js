import { app } from './config/express.js';

const PORT = process.env.PORT || 3001;
init();

async function init() {
    try {
        app.listen(PORT, () => {
            console.log(`server up 🙂\nport: ${PORT}`);
        });
    } catch (error) {
        console.error(`An error occurred: ${JSON.stringify(error)}`);
        process.exit(1);
    }
}
