"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const formSchema = z.object({
  rating: z.enum(["1", "2", "3", "4", "5"]),
  fullName: z.optional(z.string().min(2)),
  email: z.optional(z.string().email()),
  feedback: z.string().min(10),
  allowUsage: z.boolean().default(false).optional(),
});

const Feedback = (props: Props) => {
  const [message, setMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.allowUsage) {
      const id = uuidv4();
      const feedbacks = localStorage.getItem("feedbacks");
      if (feedbacks) {
        const newFeedbacks = [...JSON.parse(feedbacks), { ...values, key: id }];
        localStorage.setItem("feedbacks", JSON.stringify(newFeedbacks));
      } else {
        const newFeedbacks = [{ ...values, key: id }];
        localStorage.setItem("feedbacks", JSON.stringify(newFeedbacks));
      }
    }
    console.log(values);
    setMessage("Sending feedback...");
    setTimeout(() => {
      setMessage("Feedback sent!");
    }, 1500);
  }

  return (
    <div className="m-auto w-1/2">
      <h1 className="mb-5 text-3xl font-bold">Feedback</h1>
      <div className="rounded-lg bg-slate-500 p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    How do you rate Lung Vitality?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {["1", "2", "3", "4", "5"].map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormDescription className="text-slate-300">
                    (Optional)
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormDescription className="text-slate-300">
                    (Optional)
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Type your message here."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="allowUsage"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-white">
                  <FormControl>
                    <Checkbox
                      className="border-white data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Allow Lung Vitality to display your feedback on the
                      website.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <p className="text-white">{message}</p>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Feedback;
