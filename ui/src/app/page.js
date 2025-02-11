"use client";

import Navbar from "@/component/Navbar";
import Image from "next/image";
import Link from "next/link";
import bg from "../images/2691-removebg-preview.png";
import "./globals.css";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser); 
    }
  }, []); 
  
 
  return (
    <>
      <section style={{ height: "100vh" }}>
        <Navbar />
        <div className="container-fluid text-center p-5 text-white">
          <div className="lamp-container bg-1">
            <div className="red-circle">
              <h2 className="wish-text text-white" style={{ fontSize: "56px", paddingTop: "120px" }}>
                {user ? `Welcome, ${user}!` : "Do you have any Wish? please login "}
              </h2>
              <p
                className="rub-click"
                style={{
                  letterSpacing: "6px",
                  fontSize: "small",
                  color: "gray",
                }}
              >
                Rub And Click the Lamp
              </p>
              <Link href={"/intro"} passHref>
                <Image
                  src={bg}
                  alt="Magic Lamp"
                  width={500}
                  height={500}
                  className="img-fluid align-bottom mt-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
