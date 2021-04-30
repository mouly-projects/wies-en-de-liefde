import columnText from '../flexibles/column-text'
import playlist from '../flexibles/playlist'
import videoEmbed from '../flexibles/video-embed'
import bandMembers from '../flexibles/band-members'

export default {
  name: 'pages',
  label: 'Pages',
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
          types: [columnText, videoEmbed, playlist, bandMembers],
        },
      ],
    },
  ],
}
