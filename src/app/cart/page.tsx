

// import { Button } from '@/components/ui/button'
// import { PRODUCT_CATEGORIES } from '@/config'
// import { useCart } from '@/hooks/use-cart'
import CartComponent from '@/components/CartComponent'
// import { getServerSideUser } from '@/lib/payload-utils'
// import { cn, formatPrice } from '@/lib/utils'
// import { trpc } from '@/trpc/client'
// import { Check, Loader2, X } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'
import { cookies } from 'next/headers'

const Page = async () => {
//   const nextCookies = cookies()
//   const { user } = await getServerSideUser(nextCookies)
 
const user = {
    id: 1,
    name: 'John Doe',
    email: 'jd@test.com'
}

  return (
    <>
    <CartComponent user={user} />
    </>
  )
}

export default Page