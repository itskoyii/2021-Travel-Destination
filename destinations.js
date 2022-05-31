// dstination list
const destination = [
  {
    id: 1,
    title: "Nintendo World",
    country: "japan",
    city: "osaka",
    img: "./images/Nintendo-World-Japan.jpeg",
    desc: "The world's first Super Nintendo World is set to open inside the Universal Studios Japan theme park in Osaka on February 4, 2021."
  },
  {
    id: 2,
    title: "Arashiyama Bamboo Forest",
    country: "japan",
    city: "kyoto",
    img: "./images/Bamboo-Forest-Japan.jpeg",
    desc: "This iconic forest is one of the most photographed locations in Kyoto, together with Fushimi Inari Shrine and Gion neighborhood.",
  },
  {
    id: 3,
    title: "Zhangjiajie National Forest Park",
    country: "china",
    city: "Zhangjiajie",
    img: "./images/Landscape-of-Zhangjiajie-China.jpeg",
    desc: `
    World of Avatar. Highlights: Zhangjiajie Wulingyuan National Forest Park, Tianmen Mountain, Zhangjiajie Grad Canyon Glasses Bridge`,
  },
  {
    id: 4,
    title: "glass bridge",
    country: "china",
    city: "Zhangjiajie",
    img: "./images/Glassbridge-China.jpeg",
    desc: `Zhangjiajie Glass footpath is a skywalk bridge in Zhangjiajie, Hunan, above the Wulingyuan area. The bridge, built as an attraction for tourists, is glass-bottomed and is transparent.`,
  },
  {
    id: 5,
    title: "Emperor Qinshihuang's Mausoleum Site Museum",
    country: "china",
    city: "Xi'an",
    img: "./images/Terracotta-Army-China.jpeg",
    desc: `The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.`,
  },
  {
    id: 6,
    title: "YehLiu Geopark",
    country: "taiwan",
    city: "New Taipei City",
    img: "./images/YehLiu-Geopark-Taiwan.jpeg",
    desc: `A landscape of honeycomb and mushroom rocks eroded by the sea. Well-known formations named for their shapes include the Queen’s Head and Dragon’s Head.`,
  },
  {
    id: 7,
    title: "Kenting",
    country: "taiwan",
    city: "Kenting",
    img: "./images/Kenting-Taiwan.jpeg",
    desc: ` The seaside town is home to white sandy beaches, turquoise water, lush tropical forests, and stretched-out seaside cliffs. Moreover, if you love street food, the Kenting night market will not disappoint.`,
  },
  {
    id: 8,
    title: "Promthep Cape",
    country: "thailand",
    city: "Phuket",
    img: "./images/Cape-Promthep-Phuket.jpeg",
    desc: `Promthep Cape is a rocky headland that sticks out into the Andaman Sea. The Cape is Phuket’s very edge and known to be one of the island’s most photographed and iconic spots.`,
  },
  {
    id: 9,
    title: "Sanctuary of Truth",
    country: "thailand",
    city: "Pattaya City",
    img: "./images/Sanctuary-of-Truth-in-Pattaya.jpeg",
    desc: `Built entirely with hand-hewn wood carvings, this still unfinished 20-story complex offers tours.`,
  },
  {
  id: 10,
  title: "Khao Sok National Park",
  country: "thailand",
  city: "surat thani",
  img: "./images/Khao-Sok-National-Park.jpeg",
  desc: `Large national park with ancient rainforest, limestone cliffs, waterfalls & rare flora & fauna.
  `,
},
{
  id: 11,
  title: "Victoria Peak",
  country: "hong kong",
  city: "the peak",
  img: "./images/Victoria-Peak-Tower-HongKong.jpeg",
  desc: `Hong Kong's number one tourist destination features the Peak Tower and the Peak Tram, the city's oldest mode of public transport.`,
},
{
  id: 12,
  title: "Symphony of Lights",
  country: "hong kong",
  city: "hong kong island",
  img: "./images/victoria-harbour-hongkong.jpeg",
  desc: `The unique Hong Kong city light show, the Symphony of Lights holds the world record for the largest such permanent daily city light show for 14 years, and 47 buildings participate. Starts every evening at 8pm.`,
},
{
  id: 13,
  title: "fishing village",
  country: "hong kong",
  city: "tai o",
  img: "./images/Tai-O-HongKong.jpeg",
  desc: `Lovely little fishing village with many shops and seafood. Take a boat ride for lovely scenery or take a walk up the mountain to see the White Chinese Dolphins swim.`,
},
{
  id: 14,
  title: "Fu Shan Viewing Point",
  country: "hong kong",
  city: "tai o",
  img: "./images/Fu-Shan-Viewing-Point-hongkong.jpeg",
  desc: `Take a short hike up to the Fu Shan Viewing Point, which will delight you with breathtaking sea views and unobstructed vistas of Tai O’s coastline along the way. The hike itself is easy and short, and once you’ve reached Fu Shan Pavillion at the top, you’ll be surrounded by beautiful views in all directions. We recommend staying at the summit a little longer to enjoy the sunset.`,
},
{
  id: 15,
  title: "Crab Cave",
  country: "hong kong",
  city: "Cape D’Aguilar",
  img: "./images/crab-cave-hongkong.jpeg",
  desc: `Lying on the southern tip of Hong Kong Island, Cape D’Aguilar is a haven of peace and a picture-perfect spot to capture the city’s natural beauty. With its fantastic sea views, unique caves and rock formations, as well the promise of gorgeous sunsets.`
},
{
  id: 16,
  title: "Pineapple Mountain",
  country: "hong kong",
  city: "tuen mun",
  img: "./images/pineapple-mountain-hong-kong.jpeg",
  desc: `Mini Grand Canyon of Hong Kong.`
},
{
  id: 17,
  title: "Lau Shui Heung Reservoir",
  country: "hong kong",
  city: "kwan tei",
  img: "./images/Lau-Shui-Heung-Reservoir-hongkong.jpeg",
  desc: `Located in the new territories, Lau Shui Heung Reservoir is one of many reservoirs in Hong Kong. With its serene surroundings and abundance of lush greenery, there are many opportunities in the area for a photoshoot. `
},
{
  id: 18,
  title: "Henderson Waves",
  country: "singapore",
  city: "south singapore",
  img: "./images/henderson-waves-singapore.jpeg",
  desc: `Wave-shaped 36-m pedestrian bridge connecting Mount Faber Park to Telok Blangah Hill Park.`
},
{
  id: 19,
  title: "gardens by the bay",
  country: "singapore",
  city: "singapore",
  img: "./images/Gardens-by-the-bay-singapore.jpeg",
  desc: `A network of modern greenhouses & waterfront parks containing super trees lined with solar cells. Few nearby must go are Floral Fantasy, Flower Dome, Cloud Forest and Golden Gardens.`
},
{
  id: 20,
  title: "Palawan Beach",
  country: "singapore",
  city: "singapore",
  img: "./images/palawan-beach-singapore.jpeg",
  desc: `Scenic strip of sand with calm waters & fine sand, plus a suspension bridge link to a small island.`
},
{
  id: 21,
  title: "Phong Nha Cave",
  country: "vietnam",
  city: "quang binh",
  img: "./images/Phong-Nha-Ke-Bang-vietnam.jpeg",
  desc: `Phong Nha Cave is a cave in Phong Nha-Kẻ Bàng National Park, a UNESCO World Heritage Site in Quảng Bình Province, Vietnam. It is 7,729 metres long and contains 14 grottoes, as well as a 13,969 metre underground river.`
},
{
  id: 22,
  title: "Sapa Love Market",
  country: "vietnam",
  city: "Sa Pa",
  img: "./images/sapa-love-market-vietnam.jpeg",
  desc: `If you plan to visit Sapa, try to stay on weekends so you would have the opportunity to visit the love market which takes place every Saturday evening. Love market in Sapa used to be the place where ethnic people find their partners to get married. Watching the activities in the market, visitors will understand more about the culture and enjoy the life of H’Mong and Red Dao ethnic minorities.`
},
{
  id: 23,
  title: "Golden Bridge",
  country: "vietnam",
  city: "Da Nang",
  img: "./images/Golden-bridge-vietnam.jpeg",
  desc: `Pedestrians can stroll across the 150m-long pathway, high above the gorgeous greenery of the seemingly-endless Ba Na Hills, and feel like they're being held in the sky by two humongous, God-like stone hands. As it happens, the stone hands are not held up by God himself, but by a sturdy steel frame and fibreglass.`
},
{
  id: 24,
  title: "Elephant Nature Park",
  country: "thailand",
  city: "Chiang Mai",
  img: "./images/Elephant-Nature-Park-thailand.jpeg",
  desc: `Elephant rescue & rehabilitation center with volunteer opportunities, jungle tours & rafting.`
},
{
  id: 25,
  title: "Phang Nga Bay",
  country: "thailand",
  city: "Phang Nga",
  img: "./images/phang-na-bay-thailand.jpeg",
  desc: `See Phang Nga Bay and the limestone rocks off Thailand's west coast. You know the ones – they're frequently photographed. Or island hop in the Andaman Sea off of Phuket and Krabi. Here, you'll discover white sand beaches and abundant snorkelling on Ko Phi Phi Lee and Ko Phi Phi Don. `
},


];
