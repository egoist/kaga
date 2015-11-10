import 'babel-polyfill'
import koa from 'koa'
import Router from 'koa-router'
import Jade from 'koa-jade'


export function server (root) {
  const app = koa()
  const router = Router()
  const jade = new Jade({
    viewPath: root + '/themes/akagi'
  })
  app.use(jade.middleware)

  router.get('/', async function () {
    this.render('index', {msg: 'hi'})
  })

  app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(8030, () => {
      console.log('app is running at http://localhost:8030')
    })
}
