"use client"

import { useState } from "react"

import type { Selection } from "react-aria-components"
import { Description, ListBox } from "ui"

export default function ListBoxMultipleDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([3]))
  return (
    <>
      <ListBox
        selectedKeys={selected}
        onSelectionChange={setSelected}
        items={fruits}
        aria-label="Fruits"
        selectionMode="multiple"
      >
        {(fruit) => (
          <ListBox.Item id={fruit.id} textValue={fruit.name}>
            {fruit.name}
          </ListBox.Item>
        )}
      </ListBox>

      {[...selected].length > 0 && (
        <Description className="block mt-4">
          Selected: {selected === "all" ? "All selected" : [...selected].join(", ")}
        </Description>
      )}
    </>
  )
}

const fruits = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Banana",
  },
  {
    id: 3,
    name: "Orange",
  },
  {
    id: 4,
    name: "Strawberry",
  },
  {
    id: 5,
    name: "Grapes",
  },
  {
    id: 6,
    name: "Mango",
  },
  {
    id: 7,
    name: "Pineapple",
  },
]
