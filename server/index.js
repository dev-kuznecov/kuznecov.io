import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import http from 'http'
import https from 'https'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'

import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'

import schema from './graphql/schema'
import config from './config'

const app = express()
const isProd = process.env.NODE_ENV === 'production'

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({
    endpointURL: config.path.endpoint,
}))

const server = http.createServer(app)
server.listen(config.port.http, () => {
    console.log('\x1b[33m%s\x1b[0m', `HTTP server started`)
})

let subsServer = server

if(isProd) {
    const privateKey = fs.readFileSync(config.ssl.private, 'utf8')
    const certificate = fs.readFileSync(config.ssl.certificate, 'utf8')
    const ca = fs.readFileSync(config.ssl.ca, 'utf8')

    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    }

    const httpsServer = https.createServer(credentials, app)
    httpsServer.listen(config.port.https, () => {
        console.log('\x1b[33m%s\x1b[0m', `HTTPS server started`)
    })

    subsServer = httpsServer
}

SubscriptionServer.create(
    {
        schema,
        execute,
        subscribe,
    },
    {
        server: subsServer,
        path: config.path.subscriptions,
    }
)