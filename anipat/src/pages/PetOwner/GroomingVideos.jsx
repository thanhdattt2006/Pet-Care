import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card'
import { Tag } from 'primereact/tag'
import { Paginator } from 'primereact/paginator'
import { TabView, TabPanel } from 'primereact/tabview'
import './PetOwner.css'


export default function GroomingVideos() {
  const [first, setFirst] = useState(0)
  const [videos, setVideos] = useState([])
  const [activeIndex, setActiveIndex] = useState(0) // tab hiện tại
  const rows = 4

  useEffect(() => {
    fetch('/data/groomingVideos.json')
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error('Error loading grooming videos:', err))
  }, [])

  const petTemplate = (pet) => {
    const severity = pet === 'Dog' ? 'info' : pet === 'Cat' ? 'warning' : 'success'
    return <Tag value={pet} severity={severity} />
  }

  // Lọc video theo pet
  const dogVideos = videos.filter((v) => v.pet === 'Dog')
  const catVideos = videos.filter((v) => v.pet === 'Cat')

  // Hàm render danh sách video
  const renderVideos = (data) => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.slice(first, first + rows).map((video, index) => (
          <Card
            key={video.id}
            title={<div className="text-center font-semibold">{`${first + index + 1}. ${video.title}`}</div>}
            subTitle={<div className="text-center">{petTemplate(video.pet)}</div>}
            className="shadow-md rounded-lg overflow-hidden"
          >
            <div className="flex justify-center">
              <iframe
                width="100%"
                height="250"
                src={video.url}
                title={video.title}
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={data.length}
          onPageChange={(e) => setFirst(e.first)}
        />
      </div>
    </>
  )

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center border-b pb-2">
        Grooming Videos
      </h2>

      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => {
          setActiveIndex(e.index)
          setFirst(0)
        }}
      >
        <TabPanel header="Dog Grooming">{renderVideos(dogVideos)}</TabPanel>
        <TabPanel header="Cat Grooming">{renderVideos(catVideos)}</TabPanel>
      </TabView>
    </div>
  )
}
