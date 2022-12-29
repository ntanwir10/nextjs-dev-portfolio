import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'platform for social media',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
})
