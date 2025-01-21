import Navbar from "@/component/Navbar2";
import bg from '../../images/2691-removebg-preview.png'
import Link from "next/link";
import Image from "next/image";

export default function Intro() {
    return (
        <>
            <Navbar />
            <div
                className="container-fluid text-center p-5 text-white"
            >
                <div className="lamp-container bg-2">
                    <div className="red-circle">
                        <h2
                            className="wish-text"
                            style={{ fontSize: "60px", paddingTop: "120px" }}
                        >
                           Click the book <br/>
                            and <br/>
                            write your wish !
                        </h2>
                        <Link href={''} passHref>

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

        </>
    )
}