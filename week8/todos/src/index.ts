import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

//our database (dont do this in the server in real time)
const todos = [
  {
    id: 1,
    description : "Turn in Homework",
    isComplete: false
  },

  {
    id: 2,
    description : "Study for Test",
    isComplete: false
  }
]



app.use("/*",serveStatic({
  root: "./static",
}))

app.get('/api/todos', (c) => {
  //normally, data call to fetch 
  console.log("fetching and returning todos")
  return c.json(todos)
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
