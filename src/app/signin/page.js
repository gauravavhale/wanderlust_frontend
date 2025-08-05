"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", { name, email, password });
    // Add signup logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8FAFC] px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#181E4B] mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DF6951]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DF6951]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DF6951]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#DF6951] text-white py-2 rounded-lg hover:bg-[#c85a46] transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#DF6951] font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
