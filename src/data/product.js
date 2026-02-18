
const products = [
  {
    id: 1,
    brand: "Soylent Green",
    title: "Siril Georgette Pink Color Saree with Blouse piece",
    description: "Embrace elegance with this beautiful georgette saree featuring intricate border work. Perfect for festive occasions and weddings, it comes with a matching unstitched blouse piece for a complete traditional look.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1610189012906-40da3167440e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4,
    oldPrice: 58,
    price: 60,
    discount: 10
  },
  {
    id: 2,
    brand: "Nike",
    title: "Air Max Men Running Sports Shoes",
    description: "Designed for peak performance, these running shoes feature responsive cushioning and a breathable mesh upper. The durable rubber outsole provides excellent traction for both track and pavement running.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 5,
    oldPrice: 120,
    price: 95,
    discount: 20
  },
  {
    id: 3,
    brand: "Zara",
    title: "Women Floral Casual Summer Dress",
    description: "Stay cool and stylish with this lightweight floral print dress. Featuring a flattering A-line silhouette and breathable cotton fabric, it's the ideal choice for brunch dates or summer outings.",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539008835757-c6117dd05682?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4,
    oldPrice: 80,
    price: 65,
    discount: 18
  },
  {
    id: 4,
    brand: "Apple",
    title: "Noise Cancelling Bluetooth Headphones",
    description: "Experience world-class audio with advanced Active Noise Cancellation. These headphones deliver deep bass and crisp highs, with up to 20 hours of battery life and a comfortable ergonomic design for all-day wear.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 5,
    oldPrice: 200,
    price: 179,
    discount: 10
  },
  {
    id: 5,
    brand: "H&M",
    title: "Men Relaxed Fit Cotton T-Shirt",
    description: "A wardrobe essential, this T-shirt is crafted from premium organic cotton for ultimate comfort. Its relaxed fit and durable construction make it perfect for layering or wearing on its own.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1576566582149-434ee41c4021?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 3,
    oldPrice: 40,
    price: 30,
    discount: 25
  },
  {
    id: 6,
    brand: "Adidas",
    title: "Water-Resistant Sports Backpack",
    description: "Carry your gear in style with this versatile backpack. Featuring multiple compartments, a padded laptop sleeve, and water-resistant fabric, it's designed for the gym, school, or daily commute.",
    images: [
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546750334-99d8832a7681?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4,
    oldPrice: 75,
    price: 59,
    discount: 21
  },
  {
    id: 7,
    brand: "Fossil",
    title: "Classic Minimalist Leather Watch",
    description: "Timeless sophistication meets modern design. This watch features a genuine leather strap, a sleek stainless steel case, and a minimalist dial that complements both formal and casual attire.",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4,
    oldPrice: 150,
    price: 110,
    discount: 26
  },
  {
    id: 8,
    brand: "Ray-Ban",
    title: "Polarized Aviator Sunglasses",
    description: "Protect your eyes with iconic style. These aviators feature polarized lenses to reduce glare and provide 100% UV protection, all housed in a lightweight but durable metal frame.",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511499767390-a73359586af1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1577803645773-f933d414c56c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 5,
    oldPrice: 160,
    price: 128,
    discount: 20
  },
  {
    id: 9,
    brand: "Levi's",
    title: "511 Slim Fit Men's Jeans",
    description: "The modern slim fit with room to move. These 511 jeans are a classic choice for any day of the week, featuring a zip fly and the signature five-pocket styling.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4,
    oldPrice: 90,
    price: 72,
    discount: 20
  },
  {
    id: 10,
    brand: "Chanel",
    title: "Eau de Parfum Luxury Fragrance",
    description: "A sophisticated blend of floral and citrus notes, this luxury perfume leaves a lasting impression. Elegant and timeless, it's the perfect finishing touch for any special occasion.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1557170334-a7c3c467b230?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 5,
    oldPrice: 145,
    price: 130,
    discount: 10
  }
];

export default products;
