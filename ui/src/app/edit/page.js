import ListForm from "@/component/form";
import Navbar from "@/component/Navbar";

export default function Form() {
    return (

        <>
            <Navbar />
            <div className="container text-center form-container p-5 rounded">

                <h1 className="mb-4 text-white">Edit</h1>

                <ListForm />

            </div>


        </>
    )
}