interface Role {
  role: string
}

export default interface BandMember {
  title: string
  order: number
  roles: Role[]
}
