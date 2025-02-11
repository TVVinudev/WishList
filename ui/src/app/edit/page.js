"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/component/Navbar";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Form() {
    const searchParams = useSearchParams();
    const router = useRouter();


    const wishId = searchParams.get("wishId");
    const initialWish = searchParams.get("wish") || "";
    const initialDescription = searchParams.get("description") || "";
    const initialStatus = searchParams.get("status") || "";


    const [wish, setWish] = useState(initialWish);
    const [description, setDescription] = useState(initialDescription);
    const [status, setStatus] = useState(initialStatus);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log(wish,description,status);
        

        try {
            const response = await fetch(`/api/wish`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    wishId: wishId,
                    newWish: wish,
                    newDescription: description,
                    status: status
                }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Wish updated successfully!");
                router.push("/list");
            } else {
                toast.error(result.error || "Failed to update wish.");
            }
        } catch (error) {
            toast.error("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container text-center form-container p-5 rounded">
                <h1 className="mb-4 text-white">Edit Wish</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label text-white">Wish</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your wish"
                            value={wish}
                            onChange={(e) => setWish(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-white">Description</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-white">Status</label>
                        <select
                            className="form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="Pending">notCompleted</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <button type="submit" className="btn submit-btn" disabled={loading}>
                        {loading ? "Updating..." : "Update Wish"}
                    </button>
                </form>
            </div>
        </>
    );
}
