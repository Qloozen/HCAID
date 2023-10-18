import React from "react";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showPrivacy: boolean;
  setShowPrivacy: (showPrivacy: boolean) => void;
  setAllowData: (allowData: boolean) => void;
};

const PrivacyMessage = ({
  className,
  showPrivacy,
  setAllowData,
  setShowPrivacy,
}: Props) => {
  return (
    <div className={cn("flex max-w-md flex-col gap-8", className)}>
      <DialogHeader>
        <DialogTitle>Prediction</DialogTitle>
      </DialogHeader>
      <p>
        Allow Lung Vitality to collect data about your health and lifestyle.
        This data will be used to predict your lung health. This data will not
        be shared with any third party.
      </p>

      <div className="flex space-x-2">
        <Checkbox
          id="data"
          onCheckedChange={(checked) =>
            setAllowData(Boolean(checked.valueOf()))
          }
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="data"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Share data with Lung Vitality
          </label>
        </div>
      </div>
      <Button onClick={() => setShowPrivacy(!showPrivacy)}>Continue</Button>
    </div>
  );
};

export default PrivacyMessage;
