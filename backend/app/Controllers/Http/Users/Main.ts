import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User } from 'App/Models'
import { StoreValidator } from 'App/Validators/Users'

export default class MainsController {
  
  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async store({ request }: HttpContextContract) {
    const { email, name, password } = await request.validate(StoreValidator)
    const user = await User.create({ email, name, password })
    await user.save()

    return user
  }
}
