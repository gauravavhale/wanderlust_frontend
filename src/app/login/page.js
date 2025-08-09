"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const router = useRouter();

  // Load user from localStorage on first render
  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    try {
      setLoggedInUser(JSON.parse(storedUser));
    } catch (err) {
      console.error("Failed to parse user from localStorage");
    }
  }

  // 👇 Fetch Booking from localStorage
  const storedBooking = localStorage.getItem("Booking");
  if (storedBooking) {
    try {
      setBookingData(JSON.parse(storedBooking));
    } catch (err) {
      console.error("Failed to parse booking from localStorage");
    }
  }
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      const { user, message, success, token } = response.data;

      if (user && message && success && token) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setLoggedInUser(user); // ✅ Update state
        toast.success(message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
        router.push('/signin'); // Redirect to Sign Up page on error
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  // If user is logged in, show their dashboard
  if (loggedInUser) {
    return (
      <d iv className="flex flex-col items-center justify-center min-h-screen bg-[#F8FAFC] text-center px-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-md">
          <p className="break-words text-center font-semibold">
              Hi, {loggedInUser.name}
          </p>
          <p className="text-gray-600 mb-4">You are already logged in.</p>

          {/* 👇 Replace this with real booking data */}
          <div className="bg-[#F3F4F6] rounded-lg p-4 text-left text-sm overflow-x-hidden">
            <h3 className="text-lg font-semibold mb-2">Your Booking:</h3>
            {bookingData ? (
              <ul className="list-disc list-inside space-y-1 break-words">
                <li>
                  <strong>Destination:</strong>{" "}
                  <span className="break-words">{bookingData.destination}</span>
                </li>
                <li>
                  <strong>Date:</strong>{" "}
                  <span className="break-words">{bookingData.travelDate}</span>
                </li>
                <li>
                  <strong>Guests:</strong> {bookingData.guests}
                </li>
              </ul>
            ) : (
              <p className="text-gray-500 break-words">No booking found.</p>
            )}
          </div>          

          {/* Logout button */}
          <button
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              setLoggedInUser(null);
              toast.success("Logged out successfully");
            }}
            className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </d>
    );
  }

  // If not logged in, show login form
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8FAFC] px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#181E4B] mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/signin"
            className="text-[#DF6951] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
