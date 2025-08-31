import { Metadata } from "next";
export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ["cristian", "sanchez", "hola"]
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">about page</span>
        </>
    )
}