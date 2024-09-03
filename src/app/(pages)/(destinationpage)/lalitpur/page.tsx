import Desc from "@/app/_components/destinationpage/desc";
import Destination from "@/app/_components/destinationpage/Destination";
import PageHeading from "@/app/_components/PageHeading";

const Lalitpur = () => {
  return (
    <>
      <PageHeading img="/assets/destination/lalitput.webp" title="Lalitpur" />

      <Desc
        para="Lalitpur, also known as Patan, is a historic city located in the Kathmandu Valley of Nepal. Renowned for its rich cultural heritage and architectural splendor, Lalitpur is often celebrated as an epicenter of Newar art and craftsmanship. The city's Durbar Square, a UNESCO World Heritage Site, is a testament to its historical significance, showcasing intricate temples, palaces, and courtyards that reflect the architectural brilliance of the Malla period.

        Lalitpur is home to a vibrant cultural scene, with numerous festivals and traditional celebrations that highlight the city's deep-rooted customs. Festivals like Indra Jatra and Tihar are celebrated with great fervor, featuring traditional dances, music, and elaborate rituals that embody the local culture. The city's narrow, winding streets are lined with artisan workshops where skilled craftsmen produce traditional wood carvings, metalworks, and pottery, preserving ancient techniques.

        The city's rich history is complemented by its thriving community life, with local markets offering a variety of goods, from spices and textiles to traditional handicrafts. Lalitpur's blend of historical grandeur, vibrant cultural traditions, and artisanal craftsmanship makes it a captivating destination for those interested in exploring Nepal's cultural heritage."
      />

      <Destination
        img="/assets/destination/bhotojatra.jpg"
        para="Lalitpur, also known as Patan, is a city in Nepal renowned for its rich cultural and historical heritage. Located in the Kathmandu Valley, Lalitpur is celebrated for its traditional Newar culture, which is deeply embedded in its daily life and festivals. The city is famous for its intricate wood and metalwork, showcasing the Newar artisans' exceptional craftsmanship. The Patan Durbar Square, a UNESCO World Heritage Site, epitomizes this cultural richness with its ornate temples, palaces, and statues, reflecting the architectural grandeur of the Malla era.

        Lalitpur’s vibrant festivals, such as Indra Jatra and Tihar, are a vivid expression of its cultural vibrancy. During these festivals, the city comes alive with colorful processions, traditional dances, and elaborate rituals that honor both Hindu and Buddhist traditions. The local markets and streets are bustling with activity, offering a mix of traditional handicrafts, spices, and textiles, which highlight the city’s artisanal heritage.

        Daily life in Lalitpur is a harmonious blend of tradition and modernity, where ancient practices coexist with contemporary influences. The city’s rich cultural tapestry, combined with its historic architecture and vibrant community celebrations, makes Lalitpur a fascinating destination for those interested in exploring Nepal’s diverse cultural landscape."
      />

      <section className="container py-7">
        <div className="grid grid-cols-3 gap-3">
          <div className="relative group">
            <img
              src="/assets/destination/lalitpur/1.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lalitpur/2.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lalitpur/3.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lalitpur/4.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lalitpur/5.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lalitpur/6.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lalitpur;
