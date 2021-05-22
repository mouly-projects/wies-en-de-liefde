import flexibles from '../flexibles'

export default {
  label: 'Pages',
  name: 'pages',
  files: [
    {
      label: 'Home',
      name: 'home',
      file: 'content/pages/home.md',
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'hidden',
          default: '/',
        },
        {
          label: 'Home Section',
          name: 'sections',
          widget: 'list',
          types: flexibles,
        },
      ],
    },
    {
      label: 'Buslading muziek',
      name: 'buslading-muziek',
      file: 'content/pages/buslading-muziek.md',
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'hidden',
          default: '/buslading-muziek',
        },
        {
          label: 'Buslading muziek',
          name: 'sections',
          widget: 'list',
          types: flexibles,
        },
      ],
    },
    {
      label: 'Over de liefde',
      name: 'over-de-liefde',
      file: 'content/pages/over-de-liefde.md',
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'hidden',
          default: '/over-de-liefde',
        },
        {
          label: 'Over de liefde',
          name: 'sections',
          widget: 'list',
          types: flexibles,
        },
      ],
    },
    {
      label: 'Beeld en geluid',
      name: 'beeld-en-geluid',
      file: 'content/pages/beeld-en-geluid.md',
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'hidden',
          default: '/beeld-en-geluid',
        },
        {
          label: 'Beeld en geluid',
          name: 'sections',
          widget: 'list',
          types: flexibles,
        },
      ],
    },
  ],
}
