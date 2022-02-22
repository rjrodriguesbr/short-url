import Route from '@ioc:Adonis/Core/Route'

Route.post('auth', 'Auth/Main.store')
Route.get('auth', 'Auth/Main.show').middleware('auth')
Route.delete('auth', 'Auth/Main.destroy').middleware('auth')

Route.post('anonymous', 'Link/Anonymous.store')
Route.put('anonymous', 'Link/Anonymous.update')

Route.post('new-link', 'Link/Users.store').middleware('auth')
Route.get('new-link', 'Link/Users.index').middleware('auth')
Route.delete('new-link/:id', 'Link/Users.destroy').middleware('auth')

Route.get('populars', 'Link/Anonymous.index')

Route.get('analytics', 'Link/Users.analytics').middleware('auth')

Route.post('users', 'Users/Main.store')

Route.get('/', async () => {
  return { hello: 'world' }
})
