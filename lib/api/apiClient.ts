// lib/apiClient.ts
// import { microcms } from "@/lib/microcms"  // microCMSを使用しないため削除

export type ListResponse<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

async function fetchList<T>(
  endpoint: string,
  queries?: Record<string, unknown>
): Promise<T[]> {
  // microCMSの代わりに空配列を返す
  return []
}

async function fetchById<T>(endpoint: string, contentId: string): Promise<T> {
  // microCMSの代わりにnullを返す
  return null as T
}

export const apiClient = {
  fetchList,
  fetchById,
}
