import Image from "next/image";
import cigarettePng from "../../../public/cigarettes.png";
import QuestionDialog from "@/components/question-dialog";

export default function Home() {
  return (
    <div className="m-auto flex min-h-screen items-start justify-center gap-10 lg:w-2/3">
      <div className="flex flex-col items-center gap-10 md:items-start md:gap-0">
        <h1 className="mb-6 text-6xl font-bold">Lung Vitality</h1>
        <p className="mb-4 text-2xl text-main">
          Find out if you have lung cancer
        </p>
        <div className="flex flex-col lg:flex-row lg:flex-row-reverse lg:gap-4">
          <Image
            className="mb-4"
            src={cigarettePng}
            alt="Cigarette png"
          />
          <p>
            Lung cancer is a devastating disease often linked to traditional
            tobacco smoking. However, for those seeking a potentially less
            harmful alternative, electronic cigarettes, or e-cigarettes, offer
            an option. E-cigarettes deliver nicotine without the harmful tar and
            many of the carcinogens found in tobacco smoke.
            <br />
            <br />
            By conducting our test potential smokers can calculate their risk at
            having lung cancer, and if met with a high risk can alleviate this
            risk by switching their smoking habits to a more friendly one,
            offered by e-cigarettes. Start the test by clicking on the button below!
          </p>
        </div>
        <QuestionDialog />
      </div>
    </div>
  );
}
