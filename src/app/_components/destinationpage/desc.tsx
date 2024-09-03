interface descprop {
  para: string;
}
const Desc = ({ para }: descprop) => {
  return (
    <section className="container py-7">
      <p className="text-justify">{para}</p>
    </section>
  );
};

export default Desc;
