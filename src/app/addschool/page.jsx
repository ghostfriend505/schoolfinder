"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSchoolPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/addschool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ School added successfully!");
      } else {
        setMessage("❌ Error: " + result.error);
      }
    } catch (err) {
      setMessage("❌ Something went wrong!");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add a School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <input
          {...register("name", { required: true })}
          placeholder="School Name"
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}

        <input
          {...register("address")}
          placeholder="Address"
          className="w-full p-2 border rounded"
        />

        <input
          {...register("city")}
          placeholder="City"
          className="w-full p-2 border rounded"
        />

        <input
          {...register("state")}
          placeholder="State"
          className="w-full p-2 border rounded"
        />

        <input
          {...register("contact", { pattern: /^[0-9]{10}$/ })}
          placeholder="Contact Number"
          className="w-full p-2 border rounded"
        />
        {errors.contact && <p className="text-red-500">Enter valid 10-digit contact</p>}

        <input
          {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email_id && <p className="text-red-500">Valid email required</p>}

        <input
          {...register("image")}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Add School
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
