export default {
  label: 'Spotlight',
  name: 'spotlight',
  widget: 'object',
  fields: [
    {
      label: 'Header',
      name: 'header',
      widget: 'string',
      default: 'Spotlight',
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'Spotlight',
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'text',
      default: 'Hello World',
    },
  ],
}
