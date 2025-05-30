"use client"

import { groceries } from '@/lib/constants'
import { Alert, Loader, Accordion, Divider } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'

export default function AboutPage() {
  const icon = <IconInfoCircle />
  const [loading, setLoading] = useState(true)

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    <div className='flex justify-center flex-col items-center h-full'>
      {loading ? (
        <Loader />
      ) : (
        <Alert variant="light" color="blue" title="Alert title" icon={icon}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.
        </Alert>
      )}
      <Divider my="md" w="100%" mt={30} />
      <Accordion defaultValue={groceries[0].value}>
        {items}
      </Accordion>
    </div>
  )
}
