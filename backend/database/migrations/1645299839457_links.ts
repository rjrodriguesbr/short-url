import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Links extends BaseSchema {
  protected tableName = 'links'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('owner').nullable()
      table.string('alias').notNullable()
      table.string('url').notNullable()
      table.string('title').nullable()
      table.string('description').nullable()
      table.integer('clicks').nullable()
      table.integer('category').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
