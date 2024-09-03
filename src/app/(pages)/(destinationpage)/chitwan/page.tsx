import Desc from "@/app/_components/destinationpage/desc";
import Destination from "@/app/_components/destinationpage/Destination";
import PageHeading from "@/app/_components/PageHeading";

const Chitwan = () => {
  return (
    <>
      <PageHeading img="/assets/destination/chitwan.jpg" title="Chitwan" />

      <Desc
        para="Chitwan, located in the southern part of Nepal, is a region renowned for its rich biodiversity and vibrant cultural heritage. The heart of Chitwan is the Chitwan National Park, a UNESCO World Heritage Site, which is celebrated for its diverse wildlife and natural beauty. The park is home to the endangered one-horned rhinoceros, Bengal tigers, and a variety of other wildlife species, making it a premier destination for wildlife enthusiasts and nature lovers. Visitors can embark on thrilling jungle safaris, canoe rides, and bird-watching tours, experiencing the park’s lush landscapes and diverse ecosystems.

        Beyond its natural wonders, Chitwan is culturally vibrant, with a blend of indigenous Tharu traditions and modern influences. The Tharu people, the region's indigenous inhabitants, have a unique culture characterized by traditional dances, crafts, and vibrant festivals. Visitors can immerse themselves in Tharu culture through local dance performances, cultural shows, and visits to traditional Tharu villages.

        Chitwan's warm hospitality and rich cultural experiences, combined with its breathtaking natural scenery, make it a compelling destination for those seeking both adventure and cultural immersion in Nepal."
      />

      <Destination
        img="/assets/destination/chitculture.jpg"
        para="Chitwan, situated in Nepal's Terai region, boasts a rich cultural tapestry deeply intertwined with its natural environment. The area is renowned for its indigenous Tharu community, whose vibrant traditions and lifestyle form the heart of Chitwan's cultural identity. The Tharu people are known for their unique cultural practices, including colorful traditional dances, elaborate festivals, and distinctive crafts. Their traditional dance forms, such as the 'Tharu Stick Dance' and 'Swan Dance,' are performed during cultural events and celebrations, offering a lively glimpse into their heritage.
      The Tharu culture is characterized by its close connection to nature, which is reflected in their agricultural practices and traditional architecture. The Tharu people live in traditional mud huts with thatched roofs, often surrounded by lush greenery, which is integral to their way of life.
      Festivals like 'Maghi' and 'Holi' are celebrated with enthusiasm, showcasing traditional music, dance, and vibrant local cuisine. Chitwan's cultural landscape is further enriched by its diverse ethnic composition, which includes influences from other communities and modern Nepalese culture.
      This blend of indigenous traditions, community festivals, and harmonious coexistence with nature creates a rich cultural experience, making Chitwan a captivating destination for those interested in exploring Nepal's cultural diversity."
      />

      <section className="container py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative group">
            <img
              src="/assets/destination/chitwan/1.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/chitwan/2.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/chitwan/3.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/chitwan/4.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/chitwan/5.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/chitwan/6.jpg"
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

export default Chitwan;
