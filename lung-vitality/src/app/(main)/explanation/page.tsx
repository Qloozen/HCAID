import Image from "next/image";
import infoSvg from "../../../../public/info.svg";
import questionSvg from "../../../../public/question.svg";

type Props = {};

const Explanation = (props: Props) => {
  // Frequently asked Questions of our lung vitality test that works with machine learning model
  const questions = [
    {
      question: "How accurate are these predictions?",
      answer: `The test is roughly an prediction about whether you are likely to 
        have lung cancer. To accomplish a good prediction model we have
        used robust machine learning models and the predictions are evaluated
        above 90% accuracy. Take into account that however this may sound 
        a lot, the model is not correct in all cases. The symptoms and other features used to train
        this model are also not exhaustive, meaning these are just some
        common symptoms that may be related to lung cancer. We 
        recommend to always check in with your doctor first.`,
    },
    {
      question: "Is my data secure with Lung Vitality?",
      answer: `Your data will be secure with Lung Vitality. We only use test data for
        evaluation and improvements to the model. Data will not be used for
        any commercial purposes. If you do not consent to share any test data, 
        Lung Vitality will not store any data. `,
    },
  ];
  return (
    <div className="m-auto flex w-1/2 flex-col gap-20">
      <h1 className="text-4xl font-bold">Explanation</h1>

      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">
          How are the predictions calculated ?
        </h2>
        <Image src={infoSvg} alt="info svg" width={400} />
        <p>
          Lung Vitality is an app where you can predict if you are likely to
          Have lung cancer. The app uses “machine learning” to make These
          predictions. Machine learning is like teaching the app's brain to
          recognise patterns. We have fed the app a lot of data related to lung
          cancer, like smoking, trouble swallowing etc.
          <br />
          <br />
          When you take a test in the app, it looks at all the information
          you’ve given it and compares it to what it’s learned. It’s like a
          puzzle. By connecting the pieces, the app can make a guess about your
          risk for lung cancer.
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
