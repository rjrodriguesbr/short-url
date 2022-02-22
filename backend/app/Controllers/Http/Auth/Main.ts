import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Auth'
import { User } from 'App/Models'

export default class MainsController {
  public async store({ auth, request }: HttpContextContract) {
     // eslint-disable-next-line @typescript-eslint/naming-convention
    const { email, password } = await request.validate(StoreValidator)

    const token = await auth.attempt(email, password, {
      expiresIn: '30 days',
    })

    const user = await User.findByOrFail('email', email)

    await user.merge({ remember_me_token: token.token }).save()

    return token
  }

  public async show({ auth, response }: HttpContextContract) {
    return response.send({ user: auth.user! })
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
