import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/Link/Anonymous'
import { Link } from 'App/Models'
import parser from 'html-metadata-parser'

export default class AnonymousController {
  
  public async index({}: HttpContextContract) {
    const items = await Link.query().orderBy('clicks', 'desc').limit(100)
    const sItems = items.map((item) =>
      item.serialize({
        fields: {
          omit: ['id', 'owner', 'description', 'category', 'created_at', 'updated_at'],
        },
      })
    )

    return sItems
  }

  public async store({ request }: HttpContextContract) {
    const { link } = await request.validate(StoreValidator)

    var result = await parser(link)

    let alias = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
      alias += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    const url = link
    const title = result.meta.title ? result.meta.title : 'Página sem Titulo'
    const description = result.meta.description ? result.meta.description : ''

    const newLink = await Link.create({ alias, url, title, description })
    await newLink.save()

    return newLink
  }

  public async update({ request, response }: HttpContextContract) {
    const { alias } = await request.validate(UpdateValidator)
    const link = await Link.findByOrFail('alias', alias)

    const clicks = link.clicks + 1

    await link.merge({ clicks }).save()

    return response.send({ redirect: link.url })
  }

}
