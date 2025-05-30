"use client"

import { groceries } from '@/lib/constants'
import { useDisclosure } from '@mantine/hooks';
import { Alert, Loader, Accordion, Divider, Modal, Button, TextInput, Dialog, Group, Text, Timeline, TimelineItem } from '@mantine/core'
import { IconInfoCircle, IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'

export default function AboutPage() {
  const [loading, setLoading] = useState(true)
  const [openedModal, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [openedDialog, { open: openDialog, close: closeDialog }] = useDisclosure(false);

  const icon = <IconInfoCircle />

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
    <div className='flex justify-center flex-col gap-5 items-center h-full'>
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
      <div className="flex gap-2">
        <Button variant="default" onClick={openModal}>
          Open modal
        </Button>
        <Group justify="center">
        <Button onClick={openDialog}>Open dialog</Button>
      </Group>
      </div>

      <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>

      <Modal opened={openedModal} onClose={closeModal} title="Authentication">
        <Modal.Body className='flex flex-col gap-4'>
          <TextInput placeholder="Your email" />
          <TextInput placeholder="Your password" />
          <Button variant="default" onClick={closeModal}>
            Login
          </Button>
        </Modal.Body>
      </Modal>

      <Dialog opened={openedDialog} withCloseButton onClose={closeDialog} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={closeDialog}>Subscribe</Button>
        </Group>
      </Dialog>
    </div>
  )
}
