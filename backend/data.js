import bcrypt from 'bcryptjs';

export default {
  users: [
    {
      name: 'Julio',
      email: 'julio@admin.com',
      password: bcrypt.hashSync('adminpassword', 8),
      isAdmin: true 
    }
  ],
  news: [
    {
      title: 'Sample Title',
      image: 'null',
      author: 'null',
      text: 'lorem ipsum'
    },
    {
      title: 'Sample Title',
      image: 'null',
      author: 'null',
      text: 'lorem ipsum'
    },
    {
      title: 'Sample Title',
      image: 'null',
      author: 'null',
      text: 'lorem ipsum'
    },
    {
      title: 'Sample Title',
      image: 'null',
      author: 'null',
      text: 'lorem ipsum'
    },
    {
      title: 'Sample Title',
      image: 'null',
      author: 'null',
      text: 'lorem ipsum'
    },
    {
      title: 'Sample Title',
      image: 'null',
      author: 'null',
      text: 'lorem ipsum'
    }
  ]
}