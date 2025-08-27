export interface Product {
  id: number
  name: string
  description: string
  type: string
  base_price: number
  image_urls: string[]
  created_at: string // ISO date string
  updated_at: string // ISO date string
}

export interface ApiResponse<T> {
  status: string
  data: T
  meta: {
    timestamp: string
  }
}
