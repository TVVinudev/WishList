import Navbar from "@/component/Navbar";
import Image from "next/image";
import Link from "next/link";
import bg from "../images/2691-removebg-preview.png"; 
import "./globals.css";

export default function Home() {
  return (
    <>
      <section className=""style={{height:'100vh'}}>
        <Navbar />

        <div
          className="container-fluid text-center p-5 text-white"
        >
          <div className="lamp-container bg-1">
            <div className="red-circle">
              <h2
                className="wish-text"
                style={{ fontSize: "60px", paddingTop: "120px" }}
              >
                Do you have any Wish?
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
              <Link href={'/login'} passHref>

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
