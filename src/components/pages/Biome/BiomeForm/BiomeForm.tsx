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
import { createBiome } from "@/services/Api/Biome/createBiome";

const biomeSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter no mínimo 2 caracteres")
    .max(64, "Nome deve ter no máximo 64 caracteres"),
});

type BiomeSchema = z.infer<typeof biomeSchema>;

export function BiomeForm() {
  const form = useForm<BiomeSchema>({
    resolver: zodResolver(biomeSchema),
  });

  async function onSubmit({ name }: BiomeSchema) {
    createBiome({ name });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-[500px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Acácia" {...field} />
              </FormControl>
              <FormDescription>Nome do bioma.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Criar</Button>
      </form>
    </Form>
  );
}
