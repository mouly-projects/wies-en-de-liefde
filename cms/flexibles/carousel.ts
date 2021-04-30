export default {
  label: 'Carousel',
  name: 'carousel',
  widget: 'object',
  summary: '{{fields.header}}',
  fields: [
    {
      label: 'Header',
      name: 'header',
      widget: 'string',
      default: 'Image Gallery',
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'Carousel',
    },
    {
      label: 'Images',
      name: 'images',
      widget: 'list',
      field: { label: 'Image', name: 'image', widget: 'image' },
    },
  ],
}
