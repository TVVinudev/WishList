import Link from "next/link";

export default function ListForm() {
    return (
        <>
            <div className="mb-4">
                <label  className="form-label text-white">What's your name?</label>
                <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
            </div>


            <div className="mb-4">
                <label  className="form-label  text-white">Make your wish!</label>
                <textarea className="form-control" id="wishInput" rows="4" placeholder="Enter your wish"></textarea>
            </div>

            <Link href={'/list'}><button type="submit" className="btn submit-btn">Add your wish in Wishlist Book</button></Link>


        </>
    )
}