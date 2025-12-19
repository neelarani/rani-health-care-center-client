import RegisterForm from '@/components/register-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const RegisterPage = () => {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-foreground">
        <div className="w-full max-w-xl bg-foreground">
          <Card className="bg-foreground  border-muted-foreground/20">
            <CardHeader>
              <CardTitle className="text-muted">Create an account</CardTitle>
              <CardDescription className="text-muted/80">
                Enter your information below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
