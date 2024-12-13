"use client"

import { IconDuplicate, IconFolder, IconHighlight, IconTrash, IconUpload } from "justd-icons"
import { ContextMenu } from "ui"

export default function ContextMenuWithIconDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="grid place-content-center w-56 h-28 rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          <IconFolder />
          Open
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconHighlight />
          Rename
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconDuplicate />
          Duplicate
        </ContextMenu.Item>
        <ContextMenu.Item>
          <IconUpload />
          Share
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item isDanger>
          <IconTrash />
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
