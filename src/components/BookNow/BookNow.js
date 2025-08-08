"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const BookNow=()=>{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    guests: 1,
    message: ""
  });

  const destinations = [
    "Bali",
    "Dubai",
    "Italy",
    "Ladakh",
    "Maldives",
    "Paris",
    "SriLanka",
    "Spain",
    "Brazil",
    "Giza",
    "Switzerland",
    "Sweden",
  ];

  const router = useRouter()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token');
  if (!token) {
    toast.error("Please login to book");
    router.push('/login');
    return;
  }

  try {
    const response = await axios.post('http://localhost:4040/destinationBook/bookings', formData);
    if (response.data.success) {
      const booking = response.data.booking;
      console.log(booking);
      toast.success("Booking Successful");
      localStorage.setItem('Booking', JSON.stringify(booking));
      router.push('/login'); // You may want to change to /bookings or /success
    } else {
      toast.error(response.data.message || "Failed to Book");
    }
  } catch (error) {
    console.error("Booking Error:", error.response?.data || error.message);
    toast.error("Failed to submit booking");
  }
};


  const fnLoginCheck=()=>{
    const token = localStorage.getItem('token')
    if(!token){
      Bookingbtn.disabled = true
      toast.error("Login to Book")
      router.push('/login')
    }
  }

  return (
    <section className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Book Your Destination</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
        
        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Destination */}
        <div className="flex flex-col">
          <label className="font-medium">Destination</label>
          <select
            name="destination"
            required
            value={formData.destination}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a destination</option>
            {destinations.map((dest, index) => (
              <option key={index} value={dest}>{dest}</option>
            ))}
          </select>
        </div>

        {/* Travel Date */}
        <div className="flex flex-col">
          <label className="font-medium">Travel Date</label>
          <input
            type="date"
            name="travelDate"
            required
            value={formData.travelDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label className="font-medium">Number of Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            required
            value={formData.guests}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message (Full Width) */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-medium">Additional Requests</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any special requests?"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Book Now
          </button>
        </div>
        
      </form>
    </section>
  );
}
