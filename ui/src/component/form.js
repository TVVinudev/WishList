"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ListForm() {
    const router = useRouter();
    const [category, setCategory] = useState("");
    const [wish, setWish] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/wish", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    wish: category,
                    description: wish
                }),
            });

            const result = await response.json();
            console.log("Server Response:", result);

            if (response.ok) {
                toast.success("Wish added successfully!");
                setCategory("");
                setWish("");
                setTimeout(() => {
                    router.push("/list"); 
                }, 1500);

            } else {
                toast.error("Error adding wish: " + result.error);
            }
        } catch (error) {
            toast.error("Error submitting wish:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="form-label text-white">What's your category?</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="form-label text-white">Make your wish!</label>
                <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your wish"
                    value={wish}
                    onChange={(e) => setWish(e.target.value)}
                ></textarea>
            </div>

            <button type="submit" className="btn submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Add your wish"}
            </button>
        </form>
    );
}
