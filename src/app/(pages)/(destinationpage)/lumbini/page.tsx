import Desc from "@/app/_components/destinationpage/desc";
import Destination from "@/app/_components/destinationpage/Destination";
import PageHeading from "@/app/_components/PageHeading";

const Lumbini = () => {
  return (
    <>
      <PageHeading img="/assets/destination/lumbini.jpg" title="Lumbini" />

      <Desc
        para="Lumbini, located in the Rupandehi District of Nepal, is a profoundly significant site in the Buddhist world as the birthplace of Siddhartha Gautama, who later became known as the Buddha. Recognized as a UNESCO World Heritage Site, Lumbini is a center of pilgrimage and spiritual reflection, drawing visitors from around the globe. The central attraction is the Maya Devi Temple, which stands on the spot where Queen Maya Devi is believed to have given birth to the Buddha in 623 BCE. The temple, with its ancient ruins and sacred garden, serves as a focal point for visitors and devotees.

        Lumbini is also home to the Sacred Garden, which includes several monasteries built by various countries, reflecting the global reverence for the Buddha. The Ashoka Pillar, erected by Emperor Ashoka in the 3rd century BCE, is another important historical monument, marking the visit of this great patron of Buddhism.

        The atmosphere in Lumbini is one of tranquility and contemplation, with a focus on meditation and spiritual practice. The serene environment, complemented by lush gardens and reflective pools, offers a peaceful retreat for those seeking to explore the roots of Buddhism and engage in spiritual growth."
      />

      <Destination
        img="assets/destination/lumculture.jpg"
        para="Lumbini, Nepal is a sacred pilgrimage site for Buddhists and a cultural hub that embodies the essence of ancient India. The city is situated in the western part of Nepal, near the Indian border, and is considered one of the four most sacred Buddhist sites in the world.

        The culture of Lumbini is deeply rooted in Buddhism and is reflected in its architecture, art, and traditions. The city is home to numerous ancient monasteries, temples, and stupas, including the famous Maya Devi Temple, which is believed to be the birthplace of Lord Buddha. The temple's intricate carvings and statues showcase the rich cultural heritage of the region.

        Lumbini's cultural landscape is also influenced by its proximity to India, with influences from Hinduism and other Indian traditions. The city's cuisine, for example, is a fusion of Nepalese and Indian flavors, with popular dishes like dal bhat, momos, and thukpa. The local people are warm and welcoming, with a strong sense of community and spirituality.

        The city's vibrant cultural scene is reflected in its numerous festivals and celebrations throughout the year. The most significant of these is the Lumbini Festival, which takes place in October-November and attracts thousands of visitors from around the world. The festival features traditional music and dance performances, cultural exhibitions, and spiritual ceremonies.

        Overall, Lumbini's unique culture is a blend of Buddhism, Hinduism, and local traditions, making it a fascinating destination for cultural enthusiasts and spiritual seekers alike."
      />

      <section className="container py-7">
        <div className="grid grid-cols-3 gap-3">
          <div className="relative group">
            <img
              src="/assets/destination/lumbini/1.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lumbini/2.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lumbini/3.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lumbini/4.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lumbini/5.jpg"
              className="w-full h-80 object-cover transition-transform duration-100"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-100"></div>
          </div>
          <div className="relative group">
            <img
              src="/assets/destination/lumbini/6.jpg"
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

export default Lumbini;
