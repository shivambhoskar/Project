import Section1 from "../sectionContainer/section1";
import Section2 from "../sectionContainer/section2";
import Section3 from "../sectionContainer/section03";
import Section4 from "../sectionContainer/section4";
import Slider from "../sectionContainer/slider1";

const mainSection = () => {
  return (
    <>
      <Section1 />
      <Slider />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default mainSection;
