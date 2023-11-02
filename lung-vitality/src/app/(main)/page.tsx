import Image from "next/image";
import medicineSvg from "../../../public/medicine.svg";
import QuestionDialog from "@/components/question-dialog";

export default function Home() {
  return (
    <div className="m-auto flex min-h-screen items-start justify-center gap-10 lg:w-2/3">
      <div className="flex flex-col items-center gap-10 md:items-start md:gap-0">
        <h1 className="text-4xl font-bold">Lung Vitality</h1>
        <Image
          className="md:hidden"
          src={medicineSvg}
          alt="Medicine svg"
          width={300}
        />
        <p>
          In a world where our health often takes a back seat to our busy lives,
          the importance of accessible, ethical, and reliable health resources
          cannot be overstated. The Lung Vitality website is a digital platform
          designed to empower individuals to take control of their lung health
          and foster early detection of potential lung cancer risk, all while
          adhering to the highest ethical standards.
          <br />
          <br />
          Based on some common symptoms of lung cancer, The test will try to
          predict whether you are likely to Have lung cancer or not. Try it now:
        </p>
        <QuestionDialog />
      </div>

      <Image
        className="hidden w-[50%] md:inline-block"
        src={medicineSvg}
        alt="Medicine svg"
      />
    </div>
  );
}
