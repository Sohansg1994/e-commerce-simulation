import { SubmitHandler, useForm } from "react-hook-form";
import Logo from "../../assets/Logo.png" 
import Button from "../../components/elements/Button"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useAuthStore from "../../stores/useAuthStore";
import useUsersStore from "../../stores/useUsersStote";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../stores/useCartStote";
import { useState } from "react";
export default function SignIn() {
  const {setUser}=useAuthStore((state)=>state)
  const {users}=useUsersStore((state)=>state)
  const {clearCart}=useCartStore((state)=>state)
  const [loading, setLoading] = useState<boolean>(false); 
  const navigate=useNavigate();
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email format" }),
    password: z.string().min(1, { message: "Password is required" }),
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
    setLoading(true); 
    setTimeout(() => {
      const existingUser = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (existingUser) {
        setUser(existingUser);
        clearCart();
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error("Invalid email or password");
      }

      setLoading(false); 
    }, 2000); 
  }
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handler)} >
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors?.password && (
                  <p className="text-xs text-red-600 mt-1 ml-3">{errors.password?.message}</p>
                )}
              </div>
            </div>

            <div>
              <Button
                title="Sign In"
                long
                type='submit'   
                loading={loading}  
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            New to e-commerce?{' '}
            <a href="/sign-up" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  )
  }
  
