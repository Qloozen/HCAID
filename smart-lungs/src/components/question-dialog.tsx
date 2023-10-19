"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import QuestionForm from "./question-form";
import TestResults from "./test-results";
import { Button } from "./ui/button";

type Props = {};

const QuestionDialog = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [allowData, setAllowData] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [open]);

  const nextPage = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      setOpen(false);
    }
  };

  const pages = [
    <QuestionForm key={0} nextPage={nextPage} />,
    <TestResults key={1} nextPage={nextPage} />,
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="mt-5 bg-main" onClick={() => nextPage()}>
          Start the test
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[75%] w-fit max-w-5xl overflow-x-hidden overflow-y-scroll p-10 md:w-fit">
        {pages[pageIndex]}
      </DialogContent>
    </Dialog>
  );
};

export default QuestionDialog;
