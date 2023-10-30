import React from "react";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  className?: string;
  nextPage: () => void;
};

const TestResults = ({ className, nextPage }: Props) => {
  return (
    <div className={cn("flex max-w-md flex-col gap-8", className)}>
      <DialogHeader>
        <DialogTitle>Results</DialogTitle>
      </DialogHeader>

      <h2 className="text-xl font-bold">
        You are most likely to have lung cancer.
      </h2>

      {/* TODO: Find some working links and add if possible */}

      <p>
        There is a high chance that you have lung cancer. From the data you
        input we also know you smoke. We have told the benefits of e-cigarettes
        before, but also verified <span className="text-main underline">research has shown</span> that
        e-cigarettes are safer than normal cigarettes. By switching from normal
        cigarettes to e-cigarettes a person can reduce their risk at lung cancer
        by 10-20%.
        <br />
        <br />
        To defeat lung cancer Smart Lungs has teamed up with several
        e-cigarettes sellers to help people switch from cigarettes to
        e-cigarettes. By using the code <span className="text-main bold">DefeatLungCancer2023</span> users can
        receive up to <span className="text-main bold">20%</span> off at the <span className="text-main underline">following sellers.</span>
      </p>

      <Button className="bg-main" onClick={() => nextPage()}>
        Continue
      </Button>
    </div>
  );
};

export default TestResults;
