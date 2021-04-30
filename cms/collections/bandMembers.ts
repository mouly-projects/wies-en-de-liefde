export default {
  label: 'Band Members',
  name: 'bandMembers',
  create: true,
  folder: 'content/bandMembers',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Naam',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Volgorde',
      name: 'order',
      widget: 'number',
      required: true,
    },
    {
      label: 'Rollen',
      name: 'roles',
      widget: 'list',
      collapsed: false,
      fields: [
        {
          label: 'Rol',
          name: 'role',
          widget: 'text',
        },
      ],
    },
  ],
}
