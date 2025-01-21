import Link from "next/link";

export default function Card() {
    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Wish</h5>
            </div>
            <div>
                <Link href={'/edit'}> <button className="edit-btn">Edit</button> </Link>
                <button className="delete-btn">Delete</button>
            </div>
        </div>

    )
}