export default {
  label: 'Singles',
  name: 'singles',
  create: true,
  folder: 'content/singles',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Spotify URL',
      name: 'spotifyUrl',
      widget: 'string',
      required: false,
    },
    {
      label: 'Apple Music URL',
      name: 'appleMusicUrl',
      widget: 'string',
      required: false,
    },
    {
      label: 'Deezer URL',
      name: 'deezerUrl',
      widget: 'string',
      required: false,
    },
    {
      label: 'Datum toegevoegd',
      name: 'date',
      widget: 'datetime',
      hint: 'Dit hoef je niet aan te passen',
    },
  ],
}
