import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {  CheckCircle, Leaf, Truck } from "lucide-react";
import ProductReel from "@/components/ProductReel";

const perks = [
  {
    name: 'Purr-fect Delivery',
    description: 'Receive your cat essentials swiftly with our fast delivery service.',
    icon: Truck,
  },
  {
    name: 'Quality Whiskers Guarantee',
    description: 'Each product is paw-selected for quality. Not satisfied? We offer a 30-day purr-licious guarantee!',
    icon: CheckCircle,
  },
  {
    name: 'Paws for the Planet',
    description: "Join us in making a difference! We plant a tree for every purchase to help our furry friends’ natural habitats.",
    icon: Leaf,
  }
]


export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="flex flex-col lg:flex-row md:gap-10">
      <div className="lg:py-20 mt-4 mx-auto text-center flex flex-col items-center max-w-3xl">
       
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {/* Your marketplace for high-quality <span className="text-blue-600">digital assests</span>. */}
          Welcome to <span className="text-orange-500" >Sweet Paws</span> where every cat&apos;s dream comes <span className="text-orange-500">True</span>!
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Explore our curated collection of delights for your feline friends – where quality meets kitty comfort!</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link className={buttonVariants()} href='/products'>Explore Cat-alog</Link>

          <Button variant='ghost'>
            <Link href="/products?category=cat_care">
            Meow Munchies &rarr;
            </Link>
          </Button>
          
        </div>
      </div>
      <Image className="w-full" src="/header2.png" alt="tomas and luna playing" width={503} height={500}/>
      </div>

      
      <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Fresh Paws Picks'
        />
    </MaxWidthWrapper>

    <section className="border-t border-grey-200 bg-gray-5-">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {
            perks.map((perk, index) => (
              <div key={index} className="text-center md:flex md:items-start md:test-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.icon className="h-1/3 w-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-8">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </MaxWidthWrapper>

    </section>
    </>
  )
}
