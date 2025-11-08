/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import z from 'zod';

const registerValidationZodSchema = z.object({
  name: z.string().min(1, { message: 'Name is Required' }),
  address: z.string().optional(),
  email: z.email({ message: 'Valid email is required' }),
  password: z
    .string()
    .min(6, { error: 'Password must be at most 100 characters long' }),

  confirmPassword: z
    .string()
    .min(6, {
      error:
        'Confirm Password is required and must be at least 6 characters long',
    })
    .refine((data: any) => data.password === data.confirmPassword, {
      error: 'Password do not match',
      path: ['confirmPassword'],
    }),
});

export const registerPatient = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const validationData = {
      name: formData.get('name'),
      address: formData.get('address'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    };

    const validatedFeilds =
      registerValidationZodSchema.safeParse(validationData);

    if (!validatedFeilds.success) {
      return {
        success: false,
        errors: validatedFeilds.error.issues.map(issue => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const registerData = {
      password: formData.get('password'),
      patient: {
        name: formData.get('name'),
        address: formData.get('address'),
        email: formData.get('email'),
      },
    };

    const newFormData = new FormData();
    newFormData.append('data', JSON.stringify(registerData));

    const res = await fetch(
      `http://localhost:5000/api/v1/user/create-patient`,
      {
        method: 'POST',
        body: newFormData,
      }
    ).then(res => res.json());

    console.log(res, 'res');

    return res;
  } catch (err) {
    console.log(err);
  }
};
