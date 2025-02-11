import Link from "next/link";
import toast from "react-hot-toast";

export default function Card({ wish }) {
    const handleDelete = async () => {
        try {
            const confirmDelete = window.confirm(`Are you sure you want to delete ?`);
            if (!confirmDelete) return;

            const response = await fetch(`/api/wish?wishId=${wish.wishId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Wish deleted successfully!");

            } else {
                toast.error(result.error || "Error deleting wish");
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.error("Fetch Error:", error);
        }
    };

    return (
        <div className="card ">
            <div className="card-body">
            {wish.status === "Completed" && (
                    <span className="badge bg-success position-absolute text-white top-0 end-0 m-2">Completed</span>
                )
                }
                <h5 className="card-title">{wish.wish}</h5>
                <p>{wish.description}</p>
            </div>
            <div>
                <Link
                    href={`/edit?wishId=${wish.wishId}
                            &wish=${encodeURIComponent(wish.wish)}
                            &description=${encodeURIComponent(wish.description)}
                            &status=${encodeURIComponent(wish.status)}`} 
                >
                    <button className="edit-btn">Edit</button>
                </Link>

                <button onClick={handleDelete} className="delete-btn">Delete</button>
            </div>
        </div>
    );
}
