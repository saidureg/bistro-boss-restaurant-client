import SectionTitle from "../../../../components/SectionTitle";
import featuresImg from "../../../../assets/home/featured.jpg";
import "./featuresItem.css";
const FeaturesItem = () => {
  return (
    <section className="mb-12 features-item text-white">
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
      <div className="md:flex justify-center items-center gap-6 px-32 pb-20 pt-12">
        <div>
          <img src={featuresImg} alt="" />
        </div>
        <div className="space-y-4">
          <h3>March 20, 2023</h3>
          <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut
            rerum eveniet saepe temporibus ratione eius iure? Repudiandae cum
            consequatur officia adipisci quam. Quas labore explicabo iste ex,
            praesentium architecto! Animi tempora ea asperiores, magnam cumque
            rerum totam voluptatum illum reiciendis consequuntur accusantium
            unde blanditiis expedita molestias consequatur, adipisci quasi!
          </p>
          <button className="btn btn-outline">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesItem;
