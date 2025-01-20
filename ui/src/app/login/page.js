import Link from "next/link";

export default function Login() {
    return (
        
            <div className="container text-center form-container">

                <h1 className="mb-4 text-white">Login</h1>

                <div className="mb-4">
                    <label for="nameInput" className="form-label text-white">What's your UserID?</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Enter your Userid" />
                </div>
                <div className="mb-4">
                    <label for="nameInput" className="form-label text-white">Password</label>
                    <input type="Password" className="form-control" id="nameInput" placeholder="Enter your Password" />
                </div>

                <Link href="./List.html"><button type="submit" className="btn submit-btn">Edited Wish!</button></Link>

            </div>

    )
}