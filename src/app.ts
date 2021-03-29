import express from 'express';
import { createConnection } from 'typeorm'
import { Post } from './entities/Post';
import { User } from './entities/User';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HLW to the new project");
})

async function start() {
    await createConnection({
        type: 'postgres',
        password: 'twitter',
        username: 'twitter',
        database: 'twitter',
        entities: [Post, User],
        dropSchema: false,
        synchronize: true,
        logging: true,
        logger: 'advanced-console'
    })
    app.listen(PORT, () => console.log(`app is running on http://localhost:${PORT}`))
}
start();