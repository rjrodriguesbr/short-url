import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Warren',
        email: 'warrenmiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Carmela',
        email: 'carmelamiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Knox',
        email: 'knoxmiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Penelope',
        email: 'penelopemiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Brown',
        email: 'brownmiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Rosalyn',
        email: 'rosalynmiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Pansy',
        email: 'pansymiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Burris',
        email: 'burrismiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Sybil',
        email: 'sybilmiller@acumentor.com',
        password: 'admin123456',
      },
      {
        name: 'Chase',
        email: 'chasemiller@acumentor.com',
        password: 'admin123456',
      },
    ])
  }
}
