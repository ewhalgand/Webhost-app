"use client";

import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFetcher } from "@/hook/useFetcher";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const formSchema = z.object({
  lastname: z.string().min(1),
  firstname: z.string().min(1),
  email: z.string(),
  password: z.string().min(1),
});

export default function page() {
  const [toastActive, setToastActive] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
    },
  });

  const { fetcher, loading, error } = useFetcher();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (data) {
      setToastActive(true);
      toast("Succès", {
        description: data.message,
        onAutoClose: () => {
          setToastActive(false);
          router.push("/login");
        },
        duration: 2000,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-xl mx-auto mt-20 px-4 py-10"
      >
        <div className="flex flex-col gap-4 mobile-grid">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entrez votre nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Entrez votre prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Prénom" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entrez votre mail</FormLabel>
              <FormControl>
                <Input placeholder="E-mail" type="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entrez votre mot de passe</FormLabel>
              <FormControl>
                <Input placeholder="Mot de passe" type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="cursor-pointer"
          type="submit"
          disabled={loading || toastActive}
        >
          Submit
        </Button>
        <Toaster />
      </form>
    </Form>
  );
}
