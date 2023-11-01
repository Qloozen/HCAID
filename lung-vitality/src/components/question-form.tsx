"use client";

import { DialogHeader, DialogTitle } from "./ui/dialog";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";

const formSchema = z.object({
  age: z
    .number()
    .int()
    .min(16, { message: "You must be at least 16 years old." }),
  allergy: z.enum(["1", "2"]),
  alcoholConsuming: z.enum(["0", "1", "2", "3"]),
  swallowingDifficulty: z.enum(["0", "1", "2", "3"]),
  wheezing: z.enum(["0", "1", "2", "3"]),
  coughing: z.enum(["0", "1", "2", "3"]),
  chestPain: z.enum(["0", "1", "2", "3"]),
  peerPressure: z.enum(["0", "1", "2", "3"]),
  yellowFingers: z.enum(["0", "1", "2", "3"]),
  fatigue: z.enum(["0", "1", "2", "3"]),
  anxiety: z.enum(["0", "1", "2", "3"]),
});

type Props = {
  className?: string;
  nextPage: (results?: { cancer: string; force_plt: string }) => void;
};

const QuestionForm = ({ className, nextPage }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    // Api only takes yes or no, so we need to convert the values
    const body = {
      allergy: +values.allergy,
      alcoholConsuming: values.alcoholConsuming in ["0", "1"] ? 1 : 2,
      swallowingDifficulty: values.swallowingDifficulty in ["0", "1"] ? 1 : 2,
      wheezing: values.wheezing in ["0", "1"] ? 1 : 2,
      coughing: values.coughing in ["0", "1"] ? 1 : 2,
      chestPain: values.chestPain in ["0", "1"] ? 1 : 2,
      peerPressure: values.peerPressure in ["0", "1"] ? 1 : 2,
      yellowFingers: values.yellowFingers in ["0", "1"] ? 1 : 2,
      fatigue: values.fatigue in ["0", "1"] ? 1 : 2,
      anxiety: values.anxiety in ["0", "1"] ? 1 : 2,
    };

    fetch("/api/predict", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        nextPage(data);
        setLoading(false);
      })
      .catch((_) => {
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  }

  const frequencyOptions = (
    <SelectContent>
      <SelectItem value="0">never</SelectItem>
      <SelectItem value="1">rarely</SelectItem>
      <SelectItem value="2">often</SelectItem>
      <SelectItem value="3">daily</SelectItem>
    </SelectContent>
  );

  const severityOptions = (
    <SelectContent>
      <SelectItem value="0">none</SelectItem>
      <SelectItem value="1">mild</SelectItem>
      <SelectItem value="2">moderate</SelectItem>
      <SelectItem value="3">severe</SelectItem>
    </SelectContent>
  );

  return (
    <div className={cn("w-[50vw]", className)}>
      <DialogHeader>
        <DialogTitle>Prediction</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    className="w-min"
                    type="number"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormDescription>Age in years.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="allergy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Do you have any known allergies, particularly ones that might
                  affect your lung health?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="1">no</SelectItem>
                    <SelectItem value="2">yes</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alcoholConsuming"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you drink alcohol?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>

                  {frequencyOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="swallowingDifficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you often have trouble swallowing?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>

                  {frequencyOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="wheezing"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Have you noticed any wheezing when breathing?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                  </FormControl>

                  {severityOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coughing"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How ofter do you cough during the day?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>

                  {frequencyOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chestPain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you experience any chest pain?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>
                  {severityOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="peerPressure"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Do you think peer pressure, particularly in situations
                  involving drinking and smoking, is something that affects you?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                  </FormControl>

                  {severityOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="yellowFingers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Have you noticed any discoloration in your fingers or
                  fingernails that appears yellow?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                  </FormControl>

                  {severityOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fatigue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you feel fatigue?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                  </FormControl>

                  {frequencyOptions}
                </Select>{" "}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="anxiety"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How would you describe the impact of your anxiety on your
                  daily life and well-being?
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                  </FormControl>

                  {severityOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <p className="text-red-500">{error}</p>}
          {loading && <p className="text-main">Loading...</p>}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default QuestionForm;
