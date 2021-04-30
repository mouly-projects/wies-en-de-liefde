import bandMembers from './collections/bandMembers'
import pages from './collections/pages'
import singles from './collections/singles'
import globals from './collections/globals'

export default {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  local_backend: true,
  load_config_file: false,
  media_folder: 'public/images',
  public_folder: 'images',

  collections: [pages, singles, bandMembers, globals],
}
