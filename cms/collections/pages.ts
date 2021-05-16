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
          label: 'Gedicht',
          name: 'poem',
          widget: 'markdown',
          required: true,
          buttons: [],
          editor_components: [],
          modes: ['rich_text'],
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
          label: 'Over de liefde',
          name: 'sections',
          widget: 'list',
          types: flexibles,
        },
      ],
    },
  ],
}
