import 'babel-polyfill'
import koa from 'koa'
import Router from 'koa-router'

const app = koa()
const router = Router()

router.get('/', async function () {
  this.body = 'hi'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8030, () => {
    console.log('app is running at http://localhost:8030')
  })
