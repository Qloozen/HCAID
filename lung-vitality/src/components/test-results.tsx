import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  className?: string;
  testResults: { cancer: string; force_plt: string };
  nextPage: () => void;
};

const TestResults = ({ className, testResults, nextPage }: Props) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <DialogHeader>
        <DialogTitle>Results</DialogTitle>
      </DialogHeader>
      {testResults.cancer === "No" ? (
        <h2 className="text-xl font-bold">
          You are likely to <span className="font-bold underline">not</span>{" "}
          have lung cancer
        </h2>
      ) : (
        <h2 className="text-xl font-bold">
          You are likely to have lung cancer.
        </h2>
      )}

      <p>
        Our predictions are based on people with similar symptoms and features,
        note that this is roughly a prediction about whether you are likely to
        have lung cancer. We recommend to always check in with your doctor first
        if you are concerned about your health. Most of the data we used is from
        adults that are 40 years or older. If you are younger than 40, the
        predictions may be less accurate.
        <br />
        <br />
        More info about how the predictions are calculated can be found
        <Link href={"/explanation"}>
          <span className="text-main underline"> here.</span>
        </Link>
        <br />
        <br />
        Below you can find a SHAP force plot that shows which factors (Coughing,
        drinking etc.) influenced the lung cancer test result. Longer bars mean
        a stronger impact, and their color (red or blue) indicates if they
        increased or decreased the risk. The center line is the average
        prediction. 1 means that that the model predicted you don't have lung
        cancer, 2 means that the model predicted you have lung cancer.
      </p>

      <Dialog>
        <DialogTrigger>
          <Image
            src={"data:image/png;base64," + testResults.force_plt}
            alt="force plot"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </DialogTrigger>

        <DialogContent className="w-full max-w-none md:w-full">
          <Image
            src={"data:image/png;base64," + testResults.force_plt}
            alt="force plot"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>

      <Button className="bg-main" onClick={() => nextPage()}>
        Continue
      </Button>
    </div>
  );
};

export default TestResults;
