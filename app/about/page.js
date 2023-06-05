import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { LeftLeaves, RightLeaves } from "@/components/Leaves";
import { faq } from "@/Components/faq";


const About = () => {
  return (
    <>
      <div className="content">
        <LeftLeaves count="10" />
        <div className="aboutContainer">
          <Heading title="What our project does?" />

          {faq.map((data, index) => {
            return (
              <Card
                key={index}
                question={data.question}
                brief={data.brief}
                answer={data.answer}
              />
            );
          })}
        </div>
        <RightLeaves count="10" />
      </div>
    </>
  );
};

export default About;
