import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { redirect } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postLogin } from "@/services/Api/User/Login/postLogin";
import useAuth from "@/hooks/useAuth";

const authSchema = z.object({
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, "Senha inválida"),
});

type AuthSchema = z.infer<typeof authSchema>;

export function AuthForm() {
  const { login } = useAuth();
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

  const { errors, isSubmitting } = form.formState;

  async function onSubmit({ email, password }: AuthSchema) {
    try {
      const { token, expiration } = await postLogin({ email, password });
      login({ token, tokenExpiration: expiration });
      redirect("/tree");
    } catch {
      form.setError("root", { type: "root", message: "Erro no login" });
    }
  }

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Lorax@email.com"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isSubmitting}
                      {...field}
                    />
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
                  <FormLabel className="sr-only">Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Senha"
                      type="password"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting}>Entrar</Button>
            {errors.root && <p>{errors.root.message}</p>}
          </div>
        </form>
      </Form>
    </div>
  );
}
