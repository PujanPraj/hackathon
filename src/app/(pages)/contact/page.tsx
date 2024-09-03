"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

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

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string(),
  phone: z.number(),
  message: z.string(),
});

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <section className="container ">
        <div className="wrapper flex justify-center items-center gap-6">
          <div className="right w-2/3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex-col justify-center"
              >
                <div className="flex space-x-5 mb-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Name:</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name..." {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Email:</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email..." {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex space-x-5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Phone:</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Phone no..."
                            {...field}
                            type="tel"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Country:</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Nepal" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Nepal</SelectItem>
                              <SelectItem value="dark">India</SelectItem>
                              <SelectItem value="system">Japan</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full h-20">
                      <FormLabel>Phone:</FormLabel>
                      <FormControl>
                        <textarea
                          placeholder="Enter your message..."
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded-md"
                          rows={5} // Adjust the number of rows as needed
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <div className="left w-1/3 ml-10 mb-10">
            <div className="phone flex justify-center items-center gap-3 mb-5">
              <img
                src="icons/call.png"
                alt=""
                className="h-[30px] aspect-square"
              />
              <span>977 980882580</span>
            </div>
            <div className="phone flex justify-center items-center gap-3 mb-5">
              <img
                src="icons/mail.png"
                alt=""
                className="h-[30px] aspect-square"
              />
              <span>trishul***@gmail.com</span>
            </div>
            <div className="phone flex justify-center items-center gap-3">
              <img
                src="icons/placeholder.png"
                alt=""
                className="h-[30px] aspect-square"
              />
              <span>Lokanthali, Bhaktapur</span>
            </div>
            <div className="flex justify-start"><iframe src="https://giphy.com/embed/13BlyK63hHAdUc"allowFullScreen className="mt-5 w-full"></iframe></div>
          </div>
        </div >
            <iframe
              className="w-full mt-32 pb-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.331712639985!2d85.36118019999999!3d27.676140799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a1bed1bdd29%3A0x70040fb78c745729!2sSamriddhi%20College!5e0!3m2!1sen!2snp!4v1725338140237!5m2!1sen!2snp"
              width="600"
              height="450"
            ></iframe>
      </section>
    </>
  );
};

export default page;
