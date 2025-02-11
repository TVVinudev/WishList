"use client";

import { useState } from "react";
import Navbar from "@/component/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Login() {
    const router = useRouter();

    const [data, setData] = useState({
        userName: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", 
                body: JSON.stringify(data), 
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Login successful! Redirecting..."); 
                localStorage.setItem("user", data.userName);

                setTimeout(() => {
                    router.push("/");
                }, 1500);
            } else {
                toast.error(result.error || "Invalid username or password");
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("Something went wrong. Try again.");
        }
    };

    return (
        <section>
            <Navbar />
            <div className="container text-center form-container p-5 rounded">
                <h1 className="mb-4 text-white">Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label text-white">What's your User Name?</label>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            value={data.userName}
                            onChange={handleChange}
                            placeholder="Enter your UserName"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-white">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="btn submit-btn">LOGIN</button>
                    </div>
                </form>

                <div className="mb-4">
                    <p>Are you new here? <Link href={'/signup'}>Sign Up</Link> please!</p>
                </div>
            </div>
        </section>
    );
}
