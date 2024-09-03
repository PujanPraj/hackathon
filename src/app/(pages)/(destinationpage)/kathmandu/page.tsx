import Desc from "@/app/_components/destinationpage/desc";
import Destination from "@/app/_components/destinationpage/Destination";
import PageHeading from "@/app/_components/PageHeading";

const Kathmandu = () => {
  return (
    <>
      <PageHeading img="/assets/destination/kathmandu.webp" title="Kathmandu" />

      <Desc
        para=" Kathmandu, the vibrant capital of Nepal, is a city where ancient
      history and modern life intersect seamlessly. Nestled in the Kathmandu
      Valley, this bustling metropolis serves as the cultural and political
      heart of the country. The city is renowned for its remarkable
      architectural heritage, including the iconic Swayambhunath Stupa
      (Monkey Temple) and the historic Durbar Squares, which are UNESCO
      World Heritage Sites. These landmarks are testament to Kathmandu’s
      rich history and diverse religious traditions. Kathmandu’s vibrant
      streets are alive with a mix of traditional and contemporary
      influences. The city’s markets, such as Thamel and Asan, are bustling
      with activity, offering everything from handcrafted goods and colorful
      textiles to aromatic spices and delicious street food. Festivals like
      Dashain and Tihar infuse the city with energy, featuring elaborate
      rituals, traditional music, and dance that celebrate Nepal’s cultural
      heritage. A melting pot of Hindu and Buddhist traditions, Kathmandu is
      dotted with temples and stupas, attracting both pilgrims and tourists
      seeking spiritual and cultural experiences. The city’s warm
      hospitality and rich cultural tapestry make it a dynamic and
      fascinating destination, reflecting the diverse and enduring spirit of
      Nepal."
      />

      <Destination
        img="assets/destination/indrajatra.jpg"
        para="Kathmandu, the bustling capital of Nepal, is a vibrant cultural tapestry woven from centuries of history and tradition. As the epicenter of Nepalese culture, it is renowned for its rich architectural heritage, including the ancient Swayambhunath Stupa (Monkey Temple) and the historic Durbar Squares, which are recognized as UNESCO World Heritage Sites. These landmarks reflect the city’s deep-rooted religious and cultural traditions.

          Kathmandu is also a hub for lively festivals and traditional ceremonies. Festivals like Dashain and Tihar bring the city to life with colorful processions, ceremonial rituals, and festive music and dance, highlighting the community’s deep-seated customs and communal spirit. The bustling markets of Thamel and Asan offer a sensory feast of vibrant handicrafts, aromatic spices, and diverse street foods, showcasing the city’s eclectic cultural influences.

          The city's blend of Hindu and Buddhist traditions is evident in its numerous temples and stupas, which attract both pilgrims and tourists. The warm hospitality of Kathmandu’s residents further enriches the city’s cultural experience. This fusion of ancient traditions and modern vibrancy makes Kathmandu a captivating and dynamic destination, reflecting the heart of Nepalese culture and heritage."
      />

      <section className="container py-7">
        <div className="grid grid-cols-3 gap-3">
          <div className="relative group">
            <img
              src="/assets/destination/ktm/1.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/ktm/2.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/ktm/3.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/ktm/4.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/ktm/5.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/ktm/6.jpg"
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

export default Kathmandu;
