
"use client"
  
import Link from 'next/link';
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Input from "../product/input";
import Button from "../product/button";  

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("Form submitted", data);

    try {
      const response = await axios.post("http://localhost:3000/signup", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className=" flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="block max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <div>
            <div className="px-10">
              <div className="text-3xl text-blue-200 hover:text-blue-400 font-extrabold">Login</div>
            </div>
            <div className="pt-2">
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                {...register("email", { required: "Email is required" })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message as string}</p>
              )}

              <Input
                label="Password"
                placeholder="123456"
                type="password"
                {...register("password", { required: "Password is required" })}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message as string}</p>
              )}

              <Button
                type="submit"
                value="Login"
                color="bg-gray-800"
                className="mt-8 w-full me-2 mb-2" />

              <div className='flex gap-2'>
              <p className="text-blue-500 text-xs pt-2">do not have account</p>  
              <Link className='text-black text-sm pt-2' href="/">Signup</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>  
  );
}







