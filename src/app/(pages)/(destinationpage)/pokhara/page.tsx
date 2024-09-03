import Desc from "@/app/_components/destinationpage/desc";
import Destination from "@/app/_components/destinationpage/Destination";
import PageHeading from "@/app/_components/PageHeading";

const Pokhara = () => {
  return (
    <>
      <PageHeading img="/assets/destination/pokhara.webp" title="Pokhara" />

      <Desc para="Pokhara, nestled in the heart of Nepal, is a picturesque city renowned for its stunning natural beauty and tranquil ambiance. Set against the backdrop of the majestic Annapurna mountain range, it offers breathtaking views of snow-capped peaks and serene lakes. The city is centered around Phewa Lake, a tranquil body of water where visitors can enjoy boating and admire reflections of the surrounding mountains. Pokhara is also a gateway for trekkers heading to the Annapurna region, with numerous trails offering varying levels of adventure and stunning vistas.Beyond its natural allure, Pokhara is known for its laid-back atmosphere and vibrant cultural scene. The Lakeside area buzzes with cafes, shops, and restaurants that cater to both locals and tourists, providing a variety of international and traditional Nepali cuisines. The city’s cultural heritage is reflected in its temples, pagodas, and vibrant festivals, including the lively celebrations of Dashain and Tihar. Pokhara’s blend of natural splendor, outdoor activities, and cultural richness makes it a popular destination for travelers seeking relaxation and adventure amidst some of the world’s most breathtaking landscapes." />

      <Destination
        img="/assets/destination/pokculture.jpg"
        para="Pokhara, a charming city in Nepal, offers a unique blend of natural beauty and rich cultural heritage. Known for its stunning landscapes, including the serene Phewa Lake and majestic views of the Annapurna mountain range, Pokhara is also a vibrant center of Nepali culture. The city reflects a diverse mix of ethnic traditions, with communities such as the Gurungs, Magars, and Newars contributing to its cultural mosaic.

        The cultural life in Pokhara is deeply rooted in both Hindu and Buddhist traditions, which are evident in its numerous temples and stupas. The city's festivals, such as Dashain and Tihar, are celebrated with enthusiasm and color, featuring traditional music, dance, and rituals that showcase the local customs and communal spirit.

        Pokhara's vibrant Lakeside area is a cultural hub where visitors can experience a blend of Nepali and international influences. Cafes, restaurants, and shops offer a mix of traditional and modern lifestyles, reflecting the city's cosmopolitan yet laid-back character. Local markets and cultural events provide insight into the everyday life of the inhabitants, making Pokhara a captivating destination for those interested in exploring the intersection of natural beauty and cultural richness."
      />

      <section className="container py-7">
        <div className="grid grid-cols-3 gap-3">
          <div className="relative group">
            <img
              src="/assets/destination/pokhara/1.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/pokhara/2.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/pokhara/3.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/pokhara/4.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/pokhara/5.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/pokhara/6.webp"
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

export default Pokhara;
