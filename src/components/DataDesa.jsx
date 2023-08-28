import { useState } from 'react'
import { Card, Modal } from 'antd'

const DataDesa = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)

  const showModal = (data) => {
    setSelectedCardData(data)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setSelectedCardData(null)
    setIsModalVisible(false)
  }

  const cardData = [
    {
      title: 'Card 1',
      content: 'Konten dari card 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Card 2',
      content: 'Konten dari card 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ]

  return (
    <div className="flex justify-center flex-col items-center my-36">
      <div className="flex text-3xl justify-center font-semibold">
        Data Desa
      </div>
      <div className="flex">
        {cardData.map((data, index) => (
          <Card
            key={index}
            onClick={() => showModal(data)}
            style={{ margin: '8px' }}
            cover={<img alt={data.title} src={data.imageUrl} />}
          >
            <Card.Meta title="" description="Klik untuk membuka modal" />
          </Card>
        ))}
      </div>
      <Modal
        title={selectedCardData ? null : 'Modal'}
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        {selectedCardData && (
          <>
            <img
              src={selectedCardData.imageUrl}
              alt={selectedCardData.title}
              style={{ maxWidth: '100%' }}
            />
            <p>{selectedCardData.content}</p>
          </>
        )}
      </Modal>
    </div>
  )
}

export default DataDesa
