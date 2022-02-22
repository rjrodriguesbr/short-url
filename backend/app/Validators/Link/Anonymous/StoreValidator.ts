import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    link: schema.string({ trim: true }, [rules.url()]),
  })

  public messages = {
    'url.url': 'Você precisa colocar uma URL válida!',
  }
}
