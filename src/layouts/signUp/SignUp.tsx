import { SubmitHandler, useForm } from "react-hook-form";
import Logo from "../../assets/Logo.png" 
import Button from "../../components/elements/Button"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useUsersStore from "../../stores/useUsersStote";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";
import { useState } from "react";

export default function SignUp() {
  const {users,addUser}=useUsersStore((state)=>state)
  const [loading, setLoading] = useState<boolean>(false);
  const navigate=useNavigate();
  const schema = z.object({
    firstName:z.string()
    .min(1, { message: "Fist name is required" }),
    lastName:z.string()
    .min(1, { message: "Last name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email format" }),
      password: z
      .string()
      .min(1, {message: "Password required"})
      .min(6, {message: "Password must be at least 6 characters long"}),
    confirmPassword: z.string().min(1, {message: "Password required"}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

  type FieldTypes = z.infer<typeof schema>;


  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm<FieldTypes>({
    resolver: zodResolver(schema),
  });

  const handler: SubmitHandler<FieldTypes> = async (data) => {
    setLoading(true)
    setTimeout(() => {
        const existingUser = users.find(
        (user) => user.email === data.email
        );
    
        if (existingUser) {
        toast.error("User already exists with this email");
        } else {
        const user: User = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
        };
    
        addUser(user); 
        toast.success("Sign-up successful! Please sign in.");
        navigate("/sign-in");
        }
        setLoading(false); 
    },2000)
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Company Logo"
            src={Logo}
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handler)} >
          <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  {...register('firstName')}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors?.firstName && (
                  <p className="text-xs text-red-600 mt-1 ml-3">{errors.firstName.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  {...register('lastName')}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors?.lastName && (
                  <p className="text-xs text-red-600 mt-1 ml-3">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register('email')}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors?.email && (
                  <p className="text-xs text-red-600 mt-1 ml-3">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors?.password && (
                  <p className="text-xs text-red-600 mt-1 ml-3">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
               Confirm Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="confirmPassword"
                  {...register('confirmPassword')}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors?.confirmPassword && (
                  <p className="text-xs text-red-600 mt-1 ml-3">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
            <div>
              <Button
                title="Sign Up"
                long
                type='submit'   
                loading={loading}  
              />
            </div>
          </form>
            <p className="mt-10 text-center text-sm  text-typography-gray-light">
                Already have an Account?{' '}
                <a href="/sign-in" className="leading-6 text-primary-light hover:text-primary-light/70">
                    Sign in
                </a>
            </p>
        </div>
      </div>
    </>
  )
  }
  
