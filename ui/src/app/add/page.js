import ListForm from "@/component/form";
import Navbar from "@/component/Navbar";
import Link from "next/link";

export default function Form() {
    return (

        <>
            <Navbar />
            <div className="container text-center form-container p-5 rounded">

                <h1 className="mb-4 text-white">Add</h1>

                <ListForm />

            </div>


        </>
    )
}