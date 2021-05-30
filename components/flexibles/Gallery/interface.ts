interface GalleryItem {
  label?: string
  image?: string
  embedUrl?: string
}

export default interface Gallery {
  type: 'gallery'
  component: 'gallery'
  items: GalleryItem[]
}
