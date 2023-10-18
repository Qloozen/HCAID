"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import StyledButton from "./styled-button";
import QuestionForm from "./question-form";
import PrivacyMessage from "./privacy-message";

type Props = {};

const QuestionDialog = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(true);
  const [allowData, setAllowData] = useState(true);

  useEffect(() => {
    if (!open) {
      setShowPrivacy(true);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <StyledButton title="Start the test" className="mt-5" />
      </DialogTrigger>

      <DialogContent className="max-h-[75%] w-fit max-w-5xl overflow-x-hidden overflow-y-scroll p-10 md:w-fit">
        <QuestionForm className={showPrivacy ? "hidden" : "inline-block"} />
        <PrivacyMessage
          className={showPrivacy ? "flex" : "hidden"}
          showPrivacy={showPrivacy}
          setShowPrivacy={setShowPrivacy}
          setAllowData={setAllowData}
        />
      </DialogContent>
    </Dialog>
  );
};

export default QuestionDialog;
