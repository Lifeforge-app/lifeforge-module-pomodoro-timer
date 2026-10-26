import { Text } from '@lifeforge/ui'

function Unit({ label }: { label: string }) {
  return (
    <Text as="span" color="muted" pl="xs" size="3xl">
      {label}
    </Text>
  )
}

export default function DurationText({ seconds }: { seconds: number }) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)

  return (
    <Text weight="semibold" whiteSpace="nowrap">
      {hours > 0 && (
        <>
          <Text size="4xl">{hours}</Text>
          <Unit label="h" />{' '}
        </>
      )}
      <Text size="4xl">{minutes.toString().padStart(2, '0')}</Text>
      <Unit label="m" />{' '}
      <Text size="4xl">{secs.toString().padStart(2, '0')}</Text>
      <Unit label="s" />
    </Text>
  )
}
