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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  age: z
    .number()
    .int()
    .min(16, { message: "You must be at least 16 years old." }),
  gender: z.enum(["male", "female"]),
  drinking: z.enum(["never", "rarely", "often", "daily"]),
  troubleSwallowing: z.enum(["never", "rarely", "often", "daily"]),
  coughing: z.enum(["never", "rarely", "often", "daily"]),
  chestPainLevel: z.enum(["none", "mild", "moderate", "severe"]),
  fatigue: z.enum(["never", "rarely", "often", "daily"]),
  smoking: z.enum(["never", "rarely", "often", "daily"]),
});

type Props = {
  className?: string;
  nextPage: () => void;
};

const QuestionForm = ({ className, nextPage }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: integration with machine learning model
    console.log(values);
    nextPage();
  }

  const frequencyOptions = (
    <SelectContent>
      <SelectItem value="never">never</SelectItem>
      <SelectItem value="rarely">rarely</SelectItem>
      <SelectItem value="often">often</SelectItem>
      <SelectItem value="daily">daily</SelectItem>
    </SelectContent>
  );

  const genderOptions = (
    <SelectContent>
      <SelectItem value="male">Male</SelectItem>
      <SelectItem value="female">Female</SelectItem>
    </SelectContent>
  );

  const severityOptions = (
    <SelectContent>
      <SelectItem value="none">none</SelectItem>
      <SelectItem value="mild">mild</SelectItem>
      <SelectItem value="moderate">moderate</SelectItem>
      <SelectItem value="severe">severe</SelectItem>
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
            name="name"
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
            name="drinking"
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
            name="troubleSwallowing"
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
            name="coughing"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How ofter do you cough?</FormLabel>
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
            name="chestPainLevel"
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default QuestionForm;
