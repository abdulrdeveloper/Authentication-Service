import express from 'express'
import type { Express } from 'express'


export function createApplication(): Express {
    const app = express()

    // Middlewares


    // Routes
    app.get('/', (req:any, res:any) => {
        return res.json({ message: 'Welcome to AR Auth Service, It`s Working' })
    });

    app.post('/data', (req:any, res:any) => {
        return res.json({ message: 'Welcome to AR Auth Service , Data route is working' })
    })


    return app
}