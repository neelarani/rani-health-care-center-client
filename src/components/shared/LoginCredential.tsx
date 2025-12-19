// LoginCredential.tsx

'use client';
import { Button } from '@/components/ui/button';

const LoginCredential = ({
  setCredentials,
}: {
  setCredentials: (data: { email: string; password: string }) => void;
}) => {
  return (
    <div className="flex gap-3 mb-4">
      <Button
        className="bg-foreground/20"
        type="button"
        variant="outline"
        onClick={() =>
          setCredentials({
            email: 'neela@gmail.com',
            password: '123456',
          })
        }
      >
        Patient Login
      </Button>
      <Button
        className="bg-foreground/20"
        type="button"
        variant="outline"
        onClick={() =>
          setCredentials({
            email: 'rasel@gmail.com',
            password: '1234567',
          })
        }
      >
        Doctor Login
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() =>
          setCredentials({
            email: 'admin@gmail.com',
            password: '1234567',
          })
        }
      >
        Admin Login
      </Button>
    </div>
  );
};

export default LoginCredential;
