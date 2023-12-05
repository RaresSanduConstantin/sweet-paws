export const PRODUCT_CATEGORIES = [
    {
      label: 'Cat Toys',
      value: 'cat_toys' as const,
      featured: [
        {
          name: 'Kitten Favorites',
          href: `/products?category=cat_toys`,
          imageSrc: '/nav/cat-toys/cat-toys.png',
        },
        {
          name: 'New Purr-ivals',
          href: '/products?category=cat_toys&sort=desc',
          imageSrc: '/nav/cat-toys/wheel.png',
        },
        {
          name: 'Top Playthings',
          href: '/products?category=cat_toys',
          imageSrc: '/nav/cat-toys/tower.png',
        },
      ],
    },
    {
      label: 'Cat Care',
      value: 'cat_care' as const,
      featured: [
        {
          name: 'Best Cat Food',
          href: `/products?category=cat_care`,
          imageSrc: '/nav/cat-care/food.png',
        },
        {
          name: 'Latest Care Products',
          href: '/products?category=cat_care&sort=desc',
          imageSrc: '/nav/cat-care/litter2.png',
        },
        {
          name: 'Best Care Solutions',
          href: '/products?category=cat_care',
          imageSrc: '/nav/cat-care/bestsellers.png',
        },
      ],
    },
  ]
  