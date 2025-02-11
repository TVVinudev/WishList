"use client";

import Card from "@/component/card";
import Navbar from "@/component/Navbar2";
import { useEffect, useState } from "react";

export default function List() {
    const [user, setUser] = useState(null);
    const [datas, setDatas] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/wish", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                console.log(result.data);
                
                setDatas(result.data);  
            } else {
                console.error(result.error || "Error fetching data");
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(storedUser);
        }
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row g-3">
                    {datas.length > 0 ? (
                        datas.map((wish, index) => (
                            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                                <Card wish={wish} /> 
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-white">No wishes found</p>
                    )}
                </div>
            </div>
        </>
    );
}
