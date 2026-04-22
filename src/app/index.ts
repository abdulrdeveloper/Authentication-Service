import express from 'express'
import type { Express } from 'express'


export function createApplication(): Express {
    const app = express()

    // Middlewares


    // Routes
    app.get('/', (req, res) => {
        return res.json({ message: 'Welcome to AR Auth Service, It`s Working' })
    });

    app.post('/data', (req, res) => {
        return res.json({ message: 'Welcome to AR Auth Service , Data route is working' })
    })


    return app
}