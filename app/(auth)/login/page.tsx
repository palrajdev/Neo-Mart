// app/(auth)/login/page.tsx
import AuthSwitcher from "@/components/auth/AuthSwitcher";

export default function LoginPage() {
  // optional server-side redirect when already authenticated
  // const token = cookies().get("token")?.value;
  // if (token) redirect("/");

  return <AuthSwitcher initialMode="login" />;
}
