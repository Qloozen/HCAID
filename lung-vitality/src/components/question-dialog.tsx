"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import QuestionForm from "./question-form";
import PrivacyMessage from "./privacy-message";
import TestResults from "./test-results";
import { Button } from "./ui/button";

type Props = {};

const QuestionDialog = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [allowData, setAllowData] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [testResults, setTestResults] = useState({ cancer: "", force_plt: "" });

  useEffect(() => {
    setPageIndex(0);
  }, [open]);

  const nextPage = (results?: { cancer: string; force_plt: string }) => {
    if (results) {
      setTestResults(results);
    }
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      setOpen(false);
    }
  };

  const pages = [
    <PrivacyMessage key={0} nextPage={nextPage} setAllowData={setAllowData} />,
    <QuestionForm key={1} nextPage={nextPage} />,
    <TestResults key={2} nextPage={nextPage} testResults={testResults} />,
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="mt-5 bg-main" onClick={() => nextPage()}>
          Start the test
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[75%] w-fit max-w-[90%] overflow-x-hidden overflow-y-scroll p-10">
        {pages[pageIndex]}
      </DialogContent>
    </Dialog>
  );
};

export default QuestionDialog;
