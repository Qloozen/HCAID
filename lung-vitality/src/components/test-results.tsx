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

      <h2 className="text-xl font-bold">
        {testResults.cancer === "No"
          ? "You are likely to not have lung cancer"
          : "You are likely to have lung cancer."}
      </h2>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        totam inventore aut odio eius eos tempora alias consequatur fugit
        reprehenderit iure repellendus sit magni, aperiam voluptate nesciunt
        asperiores facilis impedit, officia adipisci pariatur incidunt quaerat
        distinctio. Autem voluptate voluptatum velit facilis nulla et magni.
        Debitis dolores sapiente voluptate deleniti quidem?
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

      <Link href={"/explanation"}>
        <span className="text-main underline">more info</span>
      </Link>

      <Button className="bg-main" onClick={() => nextPage()}>
        Continue
      </Button>
    </div>
  );
};

export default TestResults;
