import React from "react";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  className?: string;
  testResults: { cancer: string; force_plt: string };
  nextPage: () => void;
};

const TestResults = ({ className, testResults, nextPage }: Props) => {
  return (
    <div className={cn("flex max-w-md flex-col gap-8", className)}>
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

      {/* TODO: Find some working links and add if possible */}

      {testResults.cancer === "Yes" ? (
        <p>
          There is a high chance that you have lung cancer. We have told the
          benefits of e-cigarettes before, but also verified{" "}
          <a
            className="text-main underline"
            href="https://www.nhs.uk/live-well/quit-smoking/using-e-cigarettes-to-stop-smoking/"
          >
            research has shown
          </a>{" "}
          that e-cigarettes are safer than normal cigarettes. By switching from
          normal cigarettes to e-cigarettes a person can reduce their risk at
          lung cancer by 10-20%.
          <br />
          <br />
          To defeat lung cancer Smart Lungs has teamed up with several
          e-cigarettes sellers to help people switch from cigarettes to
          e-cigarettes. By using the code{" "}
          <span className="bold text-main">DefeatLungCancer2023</span> users can
          receive up to <span className="bold text-main">20%</span> off at the{" "}
          <span className="text-main underline">following sellers.</span>*
          <br />
          <br />* Link not included to avoid promoting actual retail
          e-cigarettes sellers.
        </p>
      ) : (
        <p>
          Your test results have come out negative. This is very good news for
          you, however if you know any acquaintances who want to do our test
          or are smoking share this test with them. They can receive a{" "}
          <span className="bold text-main">special discount</span> of{" "}
          <span className="bold text-main">20%</span> for switching from
          traditional cigarettes to e-cigarettes.
        </p>
      )}

      <Button className="bg-main" onClick={() => nextPage()}>
        Continue
      </Button>
    </div>
  );
};

export default TestResults;
