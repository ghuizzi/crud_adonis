import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Courses extends BaseSchema {
  protected tableName = 'courses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('course_name',225).notNullable()
      table.integer('duration').notNullable()
      table.decimal('price').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at')
      table.dateTime('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
