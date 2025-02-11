"use client";

import React from 'react';
import book from '../images/bookicon.png'
import Image from 'next/image';
import img from "../images/2691-removebg-preview.png"
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Navbar() {

    const router = useRouter();

    async function handleLogout() {
        try {
            const resp = await fetch("/api/logout", {
                method: "POST",
                credentials: "include",
            });

            if (resp.ok) {
                toast.success("Logged out successfully!");
                router.push("/login");
                localStorage.setItem("user","");
            } else {
                toast.error("Logout failed. Try again.");
            }
        } catch (error) {
            toast.error("Logout failed. Try again.");
        }
    }

    
    return (
        <div>
    
            <div
                className="offcanvas offcanvas-start text-center"
                id="demo"
                data-mdb-animation-start="fade-in-down"
            >
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title text-white main-headings">Wishlist</h1>
                    <button
                        type="button"
                        className="btn-close text-reset bg-white"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="offcanvas-body mt-5">
                <Link href={'/'} className="nav-link text-white hover-overlay hover-zoom hover-shadow">
                        Home
                    </Link>
                    <Link href={'/list'} className="nav-link text-white hover-overlay hover-zoom hover-shadow">
                        List
                    </Link>
                    <Link href={"/login"} className="nav-link text-white hover-overlay hover-zoom hover-shadow">
                        Login
                    </Link>
                    <button  onClick={handleLogout} className="nav-link text-white" aria-label="Logout">
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
                    </button>
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

            {/* Navbar */}
            <div className="container-fluid">
                <div className="row align-items-center mt-4 ms-2">
                    <div className="col-auto">
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
                    <div className="col d-none d-md-block"></div>
                    <div className="col-auto">
                        <Link href={'/add'}>
                            <Image
                                src={book}
                                alt="Magic Lamp"
                                width={100}
                                height={50}
                                className="img-fluid"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
