import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

export default function SearchBar({white}: {white? : boolean}) {
  white == null ? (white = false) : null

  return !white ? (
    <div className="w-full max-w-2xs px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-black">Title</Label>
        <Input
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25",
          )}
        />
      </Field>
    </div>
  ) 
  :
  (
    <div className="w-full max-w-2xs px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Title</Label>
        <Input
          name='title'
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
          )}
        />
      </Field>
    </div>
  )
}
