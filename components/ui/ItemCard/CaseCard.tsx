'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { microcms } from '@/lib/microcms'
import { Work } from '@/types'

interface TopWorkProps {
  limit?: number // オプショナルなプロパティ
}

const TopWorkCard = ({ limit = 5 }: TopWorkProps) => {
  const [contents, setContents] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: 'cases',
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error('Unexpected data format:', data)
        }
      } catch (error) {
        console.error('Failed to fetch cases:', error)
      }
      setLoading(false)
    }

    getWorks()
  }, [limit])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <div className="flex overflow-x-auto space-x-4"> {/* 横スクロールを有効化 */}
      {contents.map((post: Work) => (
        <div
          key={post.id}
          className="bg-white text-black rounded-2xl py-10 px-5 md:p-16 flex-shrink-0 w-[600px] md:flex justify-between"
        >
          <div className="md:w-[272px] flex flex-col justify-between">
            <div>
              <p className="inline-block bg-black text-xs text-center px-2 py-1 text-white">
                {Array.isArray(post.category) && post.category.length > 0
                  ? post.category.join(', ')
                  : 'カテゴリーなし'}
              </p>
              <p className="text-lg text-black mt-2 font-bold">
                {post.title}
              </p>
            </div>
            <p className="mt-2 text-gray-400 ">{post.content}</p>
          </div>
          <div className="w-full md:w-[350px] h-[207px] border border-gray-300 rounded-2xl mt-5 md:mt-0">
            {post.image && (
              <Image
                src={post.image.url}
                alt="制作物サムネイル"
                width={350}
                height={207}
                className="w-full h-full rounded-2xl object-cover object-top"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopWorkCard
