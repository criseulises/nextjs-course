import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contacto",
    description: "pagina de contacto",
    keywords: ["Contacto Cristian"]
}

export default function ContactPage () {
    return (
        <>
            <span className="text-7xl">Contacto: @criseulises</span>
        </>
    )
}