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

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        totam inventore aut odio eius eos tempora alias consequatur fugit
        reprehenderit iure repellendus sit magni, aperiam voluptate nesciunt
        asperiores facilis impedit, officia adipisci pariatur incidunt quaerat
        distinctio. Autem voluptate voluptatum velit facilis nulla et magni.
        Debitis dolores sapiente voluptate deleniti quidem?
      </p>
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
