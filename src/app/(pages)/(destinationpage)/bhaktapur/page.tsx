import Desc from "@/app/_components/destinationpage/desc";
import Destination from "@/app/_components/destinationpage/Destination";
import PageHeading from "@/app/_components/PageHeading";

const Bhaktapur = () => {
  return (
    <>
      <PageHeading img="/assets/destination/bhaktapur.jpg" title="Bhaktapur" />

      <Desc
        para="Durbar Square, Bhaktapur Overview Bhaktapur Durbar Square is a UNESCO
          World Heritage Site and was once home to the royal family of
          Bhaktapur. Locally known as Khwopa or the ancient Newa City, visitors
          can explore the entire complex of four squares—Taumadhi Square, Durbar
          Square, Pottery Square, and Dattatreya Square. Located about 13
          kilometers east of the Kathmandu Valley, it is often visited from
          Kathmandu. The entire square is a massive display of traditional
          Newari architecture. Every building is a work of art in itself, and
          visitors will enjoy exploring. The square was severely damaged in the
          1934 and 2015 earthquakes that hit Nepal. Most of the ancient
          architecture suffered, and several buildings, statues, and structures
          were destroyed. Other buildings underwent some restoration, but
          visitors can still see the signs of the damage. Bhaktapur Durbar
          Square consists of four different squares namely, Pottery Square,
          Durbar Square, Dattatreya and Taumadhi Square. These squares comprised
          of buildings, temples, statues, etc. all belonging to the 18th
          century. The Royal Residence/ Palace is located at Durbar Square,
          which was initially situated at Dattatreya Square. The remaining
          ancient buildings are spread across the rest of the site. Here, one
          can see well-preserved 17th and 18th century Newari, traditional
          pagoda and shikhara style of architecture. There is extensive use of
          wood and stone that bear beautiful carvings depicting stories and
          mythical creatures of the time. Bhaktapur Durbar Square is located in
          the centre of the town and is accessible by the roadways. Buses are
          frequently available from Kathmandu which is located approximately
          12.5 kilometres to the east of the attraction
        </p>"
      />

      <Destination
        img="assets/destination/biska.jpg"
        para="  Bhaktapur, a city in the Kathmandu Valley of Nepal, is renowned
              for its well-preserved medieval charm and vibrant cultural
              heritage. Often referred to as the “City of Devotees,” Bhaktapur
              is deeply rooted in Hindu traditions and Newar culture. The city’s
              architecture showcases an array of intricate wood carvings,
              stunning pagoda-style temples, and majestic courtyards, making it
              a UNESCO World Heritage Site. Bhaktapur's cultural life is rich
              with traditional festivals and rituals. The Bisket Jatra, held in
              April, is one of the most famous, featuring grand chariot
              processions, vibrant street dances, and celebratory rituals that
              draw locals and tourists alike. Another notable festival is Indra
              Jatra, which honors the god Indra with processions, traditional
              dances, and the iconic Kumari Jatra, where the living goddess, or
              Kumari, makes a ceremonial appearance. The Newar community,
              indigenous to Bhaktapur, plays a central role in preserving the
              city's cultural heritage. Their traditional crafts, such as
              pottery and wood carving, are highly valued, and their cuisine,
              including specialties like 'juju dhau' (king curd) and 'baji'
              (fermented rice), reflects a rich culinary tradition. This blend
              of ancient rituals, arts, and local customs makes Bhaktapur a
              vibrant repository of Nepalese culture and history."
      />

      <section className="container py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative group">
            <img
              src="/assets/destination/bhaktapur/1.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/bhaktapur/2.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/bhaktapur/3.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/bhaktapur/4.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/bhaktapur/5.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/bhaktapur/6.jpg"
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

export default Bhaktapur;
