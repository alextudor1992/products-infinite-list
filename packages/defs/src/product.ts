import { z } from 'zod'

const nonEmptyString = z.string().nonempty()

export const productSchema = z.object({
  _id: nonEmptyString,
  name: nonEmptyString,
  slug: nonEmptyString.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  sku: nonEmptyString.regex(/^[A-Za-z0-9]+$/),
  brand: nonEmptyString,
})

export const importedProductSchema = z.tuple([nonEmptyString, nonEmptyString, nonEmptyString])

export type Product = z.infer<typeof productSchema>
