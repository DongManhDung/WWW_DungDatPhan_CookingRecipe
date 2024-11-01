import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
export default function Index() {
    return (
        <div>
            <Header />
            <main>
                <div className="container mx-auto py-8">
                    <h1 className="text-4xl font-semibold mb-8">Welcome to DDP Cooking. This is body</h1>
                    <p className="text-gray-500">
                        Bringing people together, one recipe at a time. Discover new flavors and share your personal twists with our global community.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}