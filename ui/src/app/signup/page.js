"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast";

export default function SignUp() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        userName: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("User registered successfully!");
                setFormData({ fullName: "", email: "", userName: "", password: "" }); 
               
                setTimeout(() => {
                    router.push("/login"); 
                }, 2000);
                
            } else {
                toast.error(data.error || "Something went wrong.");
            }
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        }
    };
    return (
        <section>
            <div className="container text-center form-container p-5 rounded">
                <h1 className="mb-4 text-white">Sign Up</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label text-white">What's your Full Name?</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="fullName"
                            value={formData.fullName} 
                            onChange={handleChange} 
                            placeholder="Enter your Name" 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-white">What's your Email?</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Enter your Email" 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-white">Enter a User Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="userName"
                            value={formData.userName} 
                            onChange={handleChange} 
                            placeholder="Enter your UserName" 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-white">Enter a Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            value={formData.password} 
                            onChange={handleChange} 
                            placeholder="Enter your Password" 
                        />
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="btn submit-btn">SIGN UP</button>
                    </div>
                </form>

                <div className="mb-4">
                    <p>Already have an account? <Link href={'/login'}>Log in</Link> please!</p>
                </div>
            </div>
        </section>
    );
}
