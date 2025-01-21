import Navbar from "@/component/Navbar";
import Link from "next/link";

export default function Login() {
    return (
        <section>
            <Navbar/>
            <div className="container text-center form-container p-5 rounded">

                <h1 className="mb-4 text-white">Login</h1>

                <div className="mb-4">
                    <label className="form-label text-white">What's your UserID?</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Enter your Userid" />
                </div>
                <div className="mb-4">
                    <label className="form-label text-white">Password</label>
                    <input type="Password" className="form-control" id="nameInput" placeholder="Enter your Password" />
                </div>

                <div className="mb-4">
                     <Link href={'/list'}><button type="submit" className="btn submit-btn"> LOGIN</button></Link>
                </div>
                <div className="mb-4">
                    <p> Are you new here? <Link href={'/signup'}>Sign Up</Link>  please! </p>
                </div>
               
            </div>
        </section>
    )
}