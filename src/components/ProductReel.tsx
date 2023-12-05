'use client'

import Link from 'next/link'
import ProductListing from './ProductListing'

interface ProductReelProps {
  title: string
  subtitle?: string
  href?: string
  query: any
}

const FALLBACK_LIMIT = 4

const ProductReel = (props: ProductReelProps) => {
  const { title, subtitle, href, query } = props




  let map: (any | null)[] = [
    {
        id: 1,
        name: 'Catnip',
        price: 9.99,
        images: [
            '/nav/cat-toys/wheel.png',
            '/nav/cat-toys/wheel.png',
        ]
    },
    {
        id: 2,
        name: 'Casuta pentru pisici',
        price: 29.99,
        images: [
            '/products/casuta.jpeg',
            '/products/casuta2.jpeg',
            '/products/casuta3.jpeg',
        ]
    },

    {
        id: 3,
        name: 'Jucarie',
        price: 9.99,
        images: [
            '/products/pamatuf.jpeg',
            '/products/pamatuf2.jpeg',
            '/products/pamatuf3.jpeg',
        ]
    },
    {
        id: 4,
        name: 'Turn Pisici',
        price: 49.99,
        images: [
            '/products/turn.jpeg',
            '/products/turn2.jpeg',
            '/products/turn3.jpeg',
        ]
    },

 
  ]


  return (
    <section className='py-12'>
      <div className='md:flex md:items-center md:justify-between mb-4'>
        <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
          {title ? (
            <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className='mt-2 text-sm text-muted-foreground'>
              {subtitle}
            </p>
          ) : null}
        </div>

        {href ? (
          <Link
            href={href}
            className='hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block'>
            Shop the collection{' '}
            <span aria-hidden='true'>&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className='relative'>
        <div className='mt-6 flex items-center w-full'>
          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
            {map.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductReel