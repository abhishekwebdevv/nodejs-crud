import server from './server'
import { connectDB } from './config/mongodb'

const port = process.env.PORT || 8080

function startServer() {
  server.listen(port, () => {
    console.log('Listening on port ' + port)
    connectDB()
  })
}

startServer()
