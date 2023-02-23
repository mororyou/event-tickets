export type NaviItem = {
  pageId: string
  title: string
  color: string
  icon: React.ReactNode
}
// ユーザー

// 申し込み
export type Apply = {
  id: number
  uuid: string
  booth: string
  name: string
  url: string
  date: string
  time: string
  contents: Object
  status: number
  created_at: string
  updated_at: string
}
export type EditApply = {
  id: number
  uuid: string
  booth: string
  name: string
  url: string
  date: string
  time: string
  contents: Object
  status: number
  updated_at: string
}

// ブース
export type Booth = {
  id: string
  name: string
  location: string
  questionary: boolean
  status: number
  created_at: string
  updated_at: string
}
export type EditBooth = {
  id: string
  name: string
  location: string
  questionary: boolean
  status: number
  updated_at: string
}