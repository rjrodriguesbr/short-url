import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/Link/Anonymous'
import { Link } from 'App/Models'
import parser from 'html-metadata-parser'

export default class AnonymousController {
  public async index({ auth }: HttpContextContract) {
    return await Link.query().where('owner', auth.user!.id).orderBy('created_at', 'desc')
  }

  public async analytics({ auth, response }: HttpContextContract) {
    const links = await Link.query()
    .where('owner', auth.user!.id)

    const lastLinks = await Link.query()
      .where('owner', auth.user!.id)
      .limit(3)
      .orderBy('created_at', 'desc')

    const bestLinks = await Link.query()
      .where('owner', auth.user!.id)
      .orderBy('clicks', 'desc')
      .limit(3)

    const sumLinks = links.map((item) => item.clicks).reduce((prev, curr) => prev + curr, 0)
    const lenghtAll = links.length

    return response.send({ lastLinks, bestLinks, sumLinks, lenghtAll})
  }

  public async store({ auth, request }: HttpContextContract) {
    const { link } = await request.validate(StoreValidator)

    var result = await parser(link)

    let alias = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
      alias += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    const owner = auth.user!.id
    const url = link
    const title = result.meta.title ? result.meta.title : 'Página sem Titulo'
    const description = result.meta.description ? result.meta.description : ''

    const newLink = await Link.create({ owner, alias, url, title, description })
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

  public async destroy({ auth, params }: HttpContextContract) {
    const link = await Link.findOrFail(params.id)
    await link.delete()
  }
}
