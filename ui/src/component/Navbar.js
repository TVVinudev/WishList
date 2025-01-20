import Link from "next/link";
import img from '../images/2691-removebg-preview.png'
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <div
                className="offcanvas offcanvas-start text-center bg-dark"
                id="demo"
                data-bs-animation="fade-in-down"
                style={{ color: "#fff" }}
            >
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title text-white main-headings">Wishlist</h1>
                    <button
                        type="button"
                        className="btn-close text-reset bg-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        style={{ filter: "invert(1)" }} // Ensures visibility in dark theme
                    ></button>
                </div>
                <div className="offcanvas-body mt-5">
                    <Link href="#" className="nav-link text-white hover-overlay hover-zoom hover-shadow">
                        Home
                    </Link>
                    <Link href="#" className="nav-link text-white hover-overlay hover-zoom hover-shadow">
                        About
                    </Link>
                    <Link href={"/login"} className="nav-link text-white hover-overlay hover-zoom hover-shadow">
                        Login
                    </Link>
                    <Link href="#" className="nav-link text-white" aria-label="Logout">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-box-arrow-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                            />
                            <path
                                fillRule="evenodd"
                                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="offcanvas-footer">
                    <Image
                        src={img}
                        alt="Magic Lamp"
                        width={500}
                        height={500}
                        className="img-fluid align-bottom mt-5"
                    />
                </div>
            </div>

            <p className="text-center mt-3 text-white">
                Everything will be alright at the right moment
            </p>
            <div className="mt-4 ms-2">
                <button
                    className="btn text-center"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#demo"
                >
                    <ion-icon
                        name="reorder-four-outline"
                        size="large"
                        className="text-white"
                    ></ion-icon>
                </button>
            </div>
        </>
    );
}
