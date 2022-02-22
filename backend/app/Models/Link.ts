import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { Tag } from '.'

export default class Link extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public owner: number

  @column()
  public alias: string

  @column()
  public url: string

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public clicks: number

  @column()
  public category: number

  @column.dateTime({ 
    autoCreate: true,
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy')
    }
   })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Tag, {
    localKey: 'category',
    foreignKey: 'id',
  })
  public tag: HasOne<typeof Tag>
}
