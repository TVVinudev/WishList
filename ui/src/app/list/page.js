import Card from "@/component/card";
import Navbar from "@/component/Navbar2";

export default function List() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row g-3">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Card />
                    </div>
                </div>
            </div>

        </>
    )
}