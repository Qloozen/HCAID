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
  // Name, location and allergies are not used in the bad model. This is to mimic the privacy issue of unwanted data collection. (Not actually implemented)
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters." }),
  age: z
    .number()
    .int()
    .min(16, { message: "You must be at least 16 years old." }),
  gender: z.enum(["0", "1"]),
  smoking: z.enum(["0", "1", "2", "3"]),
  shortnessOfBreath: z.enum(["0", "1", "2", "3"]),
  peerPressure: z.enum(["0", "1", "2", "3"]),
  fatigue: z.enum(["0", "1", "2", "3"]),
  allergies: z
    .string()
    .min(2, { message: "Allergies must be at least 2 characters long." }),
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
    defaultValues: {
      age: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    // Api only takes yes or no, so we need to convert the values
    const body = {
      smoking: values.smoking in ["0", "1"] ? 1 : 2,
      age: values.age,
      fatigue: values.fatigue in ["0", "1"] ? 1 : 2,
      shortnessOfBreath: values.shortnessOfBreath in ["0", "1"] ? 1 : 2,
      peerPressure: values.peerPressure in ["0", "1"] ? 1 : 2,
      gender: values.gender in ["0", "1"] ? 1 : 2,
    };

    console.log(body);
    
    fetch("/api/predict-bad", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        nextPage(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
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

  const genderOptions = (
    <SelectContent>
      <SelectItem value="0">Male</SelectItem>
      <SelectItem value="1">Female</SelectItem>
    </SelectContent>
  );

  return (
    <div className={cn("w-[75vw]", className)}>
      <DialogHeader>
        <DialogTitle>Prediction</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-min"
                    type="text"
                    {...field}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>Full name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    className="w-min"
                    type="text"
                    {...field}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>Where do you live?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your gender?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>

                  {genderOptions}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="smoking"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you smoke?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Frequency" />
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
            name="shortnessOfBreath"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often are you out of breath?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Frequency" />
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
            name="fatigue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you feel fatigued?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Frequency" />
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
                      <SelectValue placeholder="Frequency" />
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
            name="allergies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you have any allergies?</FormLabel>
                <FormControl>
                  <Input
                    className="w-min"
                    type="text"
                    {...field}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>What are your allergies?</FormDescription>
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
