const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=960",
        "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/0c02812e-6673-4058-9e30-6e0b5495f997.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/27219e80-c31e-41c8-8a66-72ee1f5c189f.jpeg?im_w=1200",
      ],
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-53694095/original/0be07950-4726-48aa-aabd-3b911da8a706.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53694095/original/558529c6-4e53-4390-a6ea-e35918b913fb.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53694095/original/3f695ce5-1af7-43de-aa2d-b973c1cea8b0.jpeg?im_w=720",
      ],
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/754427/a321804e_original.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/e342f4fe-c02e-4af8-9ca8-f22b1fca468e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2e431e02-ae13-461e-b1e5-8d5473a5e01d.jpg?im_w=720",
      ],
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/28563144/2ac12cf9_original.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6306410/55614022_original.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/28559057/f1c15811_original.jpg?im_w=1200",
      ],
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-726624117904346743/original/a4d124b2-071a-4736-928f-987ab7780566.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-726624117904346743/original/909bf0d6-aa74-45a2-967f-33e44b0039e2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-726624117904346743/original/b29674c1-8e2f-4690-8e03-c6a7f64fc833.jpeg?im_w=720",
      ],
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/af788ddb-aa85-41ec-840e-00276c957248.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/5aeae18c-6057-4342-841e-849cb6efa840.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/03f7f718-6068-4480-81a0-66ba5f25581b.jpg?im_w=720",
      ],
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-17459882/original/d68d0fe9-2b57-4887-b4f1-9f42ae902936.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/4acc44f0-dc80-4730-9c69-37fca3ba67e3.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/d8741a4b-4883-4d4e-82cc-5a0fd2260021.jpg?im_w=1200",
      ],
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-1133340751195359833/original/fcce62f3-e8da-4cc6-a5c8-e437bcfc8464.jpeg?im_w=1200",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-1133340751195359833/original/4ff5d60d-ad7b-4e80-91c0-283b5aed5e48.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMzM0MDc1MTE5NTM1OTgzMw%3D%3D/original/1bf3ce51-a6ed-4a18-b319-4afaa4aa70c7.jpeg?im_w=720",
      ],
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/2b34b2ef-bccc-4dd8-996e-99a94d0978eb.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/9bf7b059-943c-4a28-863a-15c1bdc5d068.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/22128bd9-d02b-4238-a50c-43ab7792d964.jpg?im_w=1200",
      ],
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/fc/f2/30/asanja-africa.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/13/fe/asanja-africa.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/13/71/asanja-africa.jpg?w=1200&h=-1&s=1",
      ],
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/29278146/e7be0105_original.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/29278178/83fe5abb_original.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/29278295/16017fe6_original.jpg?im_w=720",
      ],
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-54392028/original/c74fef01-6bf9-43cd-a634-ad667c4617b5.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-54392028/original/82e68098-efb7-4a82-9731-081bf7b8e3d5.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-54392028/original/b6571495-2072-4313-8569-bc3813fe5530.jpeg?im_w=1200",
      ],
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  // {
  //   title: "Charming Cottage in the Cotswolds",
  //   description:
  //     "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
  //   image: {
  //     filename: "listingimage",
  //     url: [ "https://a0.muscache.com/im/pictures/miso/Hosting-52315538/original/c47b2e09-9792-442d-bd59-0682b046964f.jpeg?im_w=720"],
  //   },
  //   price: 1200,
  //   location: "Cotswolds",
  //   country: "United Kingdom",
  // },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-50661496/original/91b2396e-cba1-4bda-b0f9-c52f964b67a1.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-50661496/original/7190de23-b42e-426f-a298-f9c442d68cad.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-50661496/original/593ba5c8-1bb8-4550-b2a5-86a3c966ec14.jpeg?im_w=720",
      ],
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-1053462741958586863/original/a43818b8-99dc-476c-b74d-e35460be6bbc.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1053462741958586863/original/35f5b4c4-819c-4e9e-998e-b5320a837087.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1MzQ2Mjc0MTk1ODU4Njg2Mw%3D%3D/original/dd444d58-9603-4bed-ab73-fa3347c7ee69.jpeg?im_w=720",
      ],
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-799266545490799053/original/62837dec-d39d-4805-be68-d8ce9ca167a9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-799266545490799053/original/a098f34d-f455-46dd-b017-eac129626a0e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-799266545490799053/original/3297d9d4-2007-40b4-97ad-d797e6413414.jpeg?im_w=720",
      ],
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-616732273207986048/original/e29bb348-1d8c-496b-9e29-a9acc35310da.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-616732273207986048/original/15180a22-1eeb-4214-be14-e501f63ff5a7.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-616732273207986048/original/dcbf8b59-9701-4784-bbd0-2b66a32fa23d.jpeg?im_w=1200",
      ],
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/c8bc12dd-5011-4a4a-8229-5300804ec516.jpg?im_w=1200",
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/99b9c7e7-9e69-4a8c-999b-78e3d76378b6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/fa70bfb8-821d-465e-a2a7-d81edd315b10.jpg?im_w=1200",
      ],
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/ecc1cf2d-b4ee-4ebe-87f7-2a2c2f47d52c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/042fecc2-f8d8-4121-b2f9-0259e794e158.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ed53f7ab-6c99-4ddd-b06d-111ef969a800.jpg?im_w=720",
      ],
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  // {
  //   title: "Desert Oasis in Dubai",
  //   description:
  //     "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
  //   image: {
  //     filename: "listingimage",
  //     url: "",
  //   },
  //   price: 5000,
  //   location: "Dubai",
  //   country: "United Arab Emirates",
  // },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-51042589/original/413c2655-b448-489b-a631-0743057b9356.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-51042589/original/c2089f26-9b2d-4ee1-adee-f878ac3849f0.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-51042589/original/54f059a0-7f62-4827-a441-410e455556d4.jpeg?im_w=720",
      ],
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/697134c3-2cb4-4995-a057-06c11b5c8194.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-54193750/original/b34f798a-1d4a-4b19-9de2-5cdc90d7d4b2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/2be64119-d029-4dc3-bd27-21c2031b4d17.jpg?im_w=720",
      ],
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-53310269/original/2570a0a7-9cb3-4518-a9b2-070a3ffe809a.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53310269/original/8c099247-31c3-4116-bd47-7ddfd0333537.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53310269/original/e4d35c9b-aaeb-491c-b4b5-6ea608155b48.jpeg?im_w=720",
      ],
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/b22717a4-341c-4138-9672-c08750fc7d56.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/6f9b8f6b-f07b-4bb4-9df2-b52cd199c46d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2dbb2b71-a009-4df4-9bf6-4b1b3539ae11.jpg?im_w=1200",
      ],
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/4e9f5bcf-f5ab-4073-91a1-32b59ccddb10.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/af225333-3f0f-426f-8877-319cc480e15e.jpg?im_w=960",
        "https://a0.muscache.com/im/pictures/c549fe08-7cf9-421f-94fa-8c3edb7cb6a5.jpg?im_w=720",
      ],
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NDE4Mzg4Nzk3NDI3NTMwMg%3D%3D/original/1145527e-ef00-4afc-8609-0b59b2582416.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1184183887974275302/original/c2148bbb-3664-41bb-9f00-d307f854a216.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-1184183887974275302/original/1bd07cad-1833-4ff4-be42-38ee11169875.jpeg?im_w=1200",
      ],
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-852918482922249722/original/654156e3-f609-4e81-afc0-59ba12dd1ec2.png?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-852918482922249722/original/a1b41200-d45a-4383-b63c-86428058bd6c.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/miso/Hosting-852918482922249722/original/87fc1a22-1f00-42da-a600-ceb51313911f.jpeg?im_w=960",
      ],
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/1a44f8f9-0c20-4d57-8dc6-76275620957f.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/97b6a6b1-453a-4a19-a20a-a47dd9ec2524.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/bbac4a47-e9ba-43fc-af16-14fac3b9f3e2.jpg?im_w=720",
      ],
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-41752321/original/9b3c5028-d40d-4778-8f65-dcaa2f050c15.jpeg?im_w=1200",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDE3NTIzMjE%3D/original/279ccd02-e4fb-4bc0-a2fc-8ca65b36fb16.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/airflow/Hosting-41752321/original/7f53eb27-f996-4fee-b7fc-706983a987ab.jpg?im_w=720",
      ],
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };
