import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    name: schema.string({ trim:true }),
    password: schema.string({ trim: true }, [rules.confirmed('cPassword')])
  })

  public messages = {
    'email.unique': 'Este email já está registrado!',
    'email.email': 'Você precisa colocar um email válido!',
    'cPassword.confirmed': 'As senhas precisam ser iguais!'
  }
}
