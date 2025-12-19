import ResetPasswordForm from '@/components/ResetPasswordForm';

const ResetPasswordPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string; email?: string; token?: string }>;
}) => {
  const params = (await searchParams) || {};
  const { redirect, email, token } = params;
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-muted">Reset Your Password</h1>
          <p className="text-muted/70">
            Enter your new password below to reset your account password
          </p>
        </div>
        <ResetPasswordForm redirect={redirect} email={email} token={token} />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
