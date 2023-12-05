import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { Metadata } from 'next'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | string, options: {
  currency?: "USD" | "EUR" | "GBP" | "BDT",
  notation?: Intl.NumberFormatOptions["notation"],
} = {
}) {
  const { currency = "EUR", notation = "compact" } = options

  const numbericPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numbericPrice)
}

export function constructMetadata({
  title = 'SweetPaws - Your Destination for Premium Cat Products',
  description = 'SweetPaws is your go-to source for top-quality cat essentials. From nutritious food to engaging toys, find everything to pamper your feline friend.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joshtriedcoding',
    },
    icons,
    metadataBase: new URL('https://digitalhippo.up.railway.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}