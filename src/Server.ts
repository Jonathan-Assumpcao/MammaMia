
import express from 'express'

import { Router, Request, Response } from 'express';
import  Routes from './routes/Routes';


const app = express();

const route = Routes;
app.use(express.json())

app.use('/', route)

app.use(route)


app.listen(3333, () => 'server running on port 3333')