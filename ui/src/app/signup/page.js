import Link from "next/link";

export default function Login() {
    return (
        <section>
            <div className="container text-center form-container p-5 rounded">

                <h1 className="mb-4 text-white">Sign Up</h1>

                <div className="mb-4">
                    <label className="form-label text-white">What's your Full Name?</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Enter your Name" />
                </div>
                <div className="mb-4">
                    <label  className="form-label text-white">What's your Email?</label>
                    <input type="email" className="form-control" id="nameInput" placeholder="Enter your Email" />
                </div>

                <div className="mb-4">
                    <label  className="form-label text-white">Enter a  UserID?</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Enter your Userid" />
                </div>
                <div className="mb-4">
                    <label  className="form-label text-white">Enter a Password</label>
                    <input type="Password" className="form-control" id="nameInput" placeholder="Enter your Password" />
                </div>

                <div className="mb-4">
                     <Link href="./List.html"><button type="submit" className="btn submit-btn">SIGN UP</button></Link>
                </div>
                <div className="mb-4">
                    <p> Already have an account? <Link href={'/login'}>Log in</Link>  please! </p>
                </div>
               
            </div>
        </section>
    )
}