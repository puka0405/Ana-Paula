import { Server } from 'azle';
import express from "express";
import cors from 'cors';
import helmet from "helmet";

export default Server(() => {
    const app = express();
    app.use(express.json());
    app.use(cors())

    app.get('/users', (req, res) => {
        const users = [
            {
                name: "Juanito",
                edad: 25
            },
            {
                name: "Angelito",
                edad: 22
            },
            {
                name: "Josesito",
                edad: 24
            },
            {
                name: "Manuelito",
                edad: 27
            },
            {
                name: "Abelardito",
                edad: 30
            },
        ];
        return res.status(200).json(users)
    })

    return app.listen();
})
