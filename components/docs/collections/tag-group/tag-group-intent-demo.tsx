"use client"

import { useListData } from "react-stately"
import { Tag, TagGroup, TagList } from "ui"

const shoes = [
  { id: "1", name: "Nike", available: true },
  { id: "2", name: "Adidas", available: false },
  { id: "3", name: "Puma", available: true },
  { id: "4", name: "Reebok", available: true },
]

export default function TagGroupIntentDemo() {
  const shoesList = useListData({
    initialItems: shoes,
  })
  return (
    <div className="space-y-2 max-w-sm">
      <TagGroup
        intent="primary"
        aria-label="Primary Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup
        intent="secondary"
        aria-label="Secondary Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup
        intent="success"
        aria-label="Success Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup
        intent="warning"
        aria-label="Warning Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
      <TagGroup
        intent="danger"
        aria-label="Danger Intent"
        selectionMode="multiple"
        onRemove={(keys) => shoesList.remove(...keys)}
      >
        <TagList items={shoesList.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>
    </div>
  )
}
