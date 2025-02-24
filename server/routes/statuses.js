export default (app) => {
  app.get('/statuses', { name: 'statuses' }, (req, reply) => {
    reply.render('/statuses/index')
  })
}