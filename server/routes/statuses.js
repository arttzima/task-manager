export default (app) => {
  app.get('/statuses', (req, reply) => {
    reply.render('/statuses/index')
  })
}