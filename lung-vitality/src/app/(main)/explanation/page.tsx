import Image from "next/image";
import infoSvg from "../../../../public/info.svg";
import questionSvg from "../../../../public/question.svg";

type Props = {};

const Explanation = (props: Props) => {
  // Frequently asked Questions of our lung vitality test that works with machine learning model
  const questions = [
    {
      question: "What is the lung vitality test ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquid impedit veniam rerum nisi voluptates dolorum incidunt dicta quaerat hic in aspernatur rem expedita a deserunt, aut adipisci soluta, nobis eius perferendis neque qui repellendus aperiam. Officia quos dolore officiis odio doloremque? Blanditiis cum distinctio dolor excepturi illum perspiciatis? Laborum!",
    },
    {
      question: "How does the lung vitality test work ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquid impedit veniam rerum nisi voluptates dolorum incidunt dicta quaerat hic in aspernatur rem expedita a deserunt, aut adipisci soluta, nobis eius perferendis neque qui repellendus aperiam. Officia quos dolore officiis odio doloremque? Blanditiis cum distinctio dolor excepturi illum perspiciatis? Laborum!",
    },
    {
      question: "How accurate is the lung vitality test ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquid impedit veniam rerum nisi voluptates dolorum incidunt dicta quaerat hic in aspernatur rem expedita a deserunt, aut adipisci soluta, nobis eius perferendis neque qui repellendus aperiam. Officia quos dolore officiis odio doloremque? Blanditiis cum distinctio dolor excepturi illum perspiciatis? Laborum!",
    },
  ];
  return (
    <div className="m-auto flex w-1/2 flex-col gap-20">
      <h1 className="text-4xl font-bold">Explanation</h1>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">About this webiste</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et alias
          totam culpa, assumenda consectetur nobis officia perspiciatis.
          Repellat, mollitia eius non nulla optio, quae soluta nemo placeat cum,
          tenetur maiores iure? Consequatur, laudantium expedita officiis est
          dolorem minima ullam illum deleniti, cupiditate neque facere facilis
          illo perferendis obcaecati officia.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">
          How are the predictions calculated ?
        </h2>
        <Image src={infoSvg} alt="info svg" width={400} />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          aliquid impedit veniam rerum nisi voluptates dolorum incidunt dicta
          quaerat hic in aspernatur rem expedita a deserunt, aut adipisci
          soluta, nobis eius perferendis neque qui repellendus aperiam. Officia
          quos dolore officiis odio doloremque? Blanditiis cum distinctio dolor
          excepturi illum perspiciatis? Laborum!
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">
          Frequently asked questions (FAQs)
        </h2>
        <Image src={questionSvg} alt="question svg" width={400} />

        <div className="flex flex-col gap-2 pt-10">
          {questions.map((question, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h3 className="text-xl font-bold">{question.question}</h3>
              <p>{question.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explanation;
