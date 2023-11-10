import PropTypes from "prop-types";
const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-[#D99904] mb-2">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-4 py-3">{heading}</h3>
    </div>
  );
};
SectionTitle.propTypes = {
  subHeading: PropTypes.string,
  heading: PropTypes.string,
};
export default SectionTitle;
