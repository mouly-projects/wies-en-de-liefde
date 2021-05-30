export default {
  label: 'Gallery',
  name: 'gallery',
  widget: 'object',
  fields: [
    {
      label: 'Items',
      name: 'items',
      widget: 'list',
      summary: '{{fields.label}}',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Embed URL',
          name: 'embedUrl',
          widget: 'text',
          required: false,
        },
        {
          label: 'Label',
          name: 'label',
          widget: 'text',
          required: false,
        },
      ],
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'gallery',
    },
  ],
}
