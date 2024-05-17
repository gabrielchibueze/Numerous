import { useRef } from "react"
import "./scroll-to.css"


export default function ScrollTO() {


    const sections = [
        {
            label: "First Section",
            ref: useRef(),
            style: {
                height: "600px",
                width: "100%",
                background: "green",
                textAlign: "center"
            }
        },
        {
            label: "Second Section",
            ref: useRef(),
            style: {
                height: "600px",
                width: "100%",
                background: "grey",
                textAlign: "center"
            }
        },
        {
            label: "Third Section",
            ref: useRef(),
            style: {
                height: "600px",
                width: "100%",
                background: "orange",
                textAlign: "center"
            }
        },
        {
            label: "Fourth Section",
            ref: useRef(),
            style: {
                height: "600px",
                width: "100%",
                background: "red",
                textAlign: "center"
            }
        },
        {
            label: "Fifth Section",
            ref: useRef(),
            style: {
                height: "600px",
                width: "100%",
                background: "purple",
                textAlign: "center"
            }
        }
    ]


    function scrollToSection(disRef) {
        disRef.current.scrollIntoView({ behavior: "smooth" })
    }

    return <div >
        <div className="Sectin-nav" style={{ display: "flex", gap: "0.5rem", marginLeft: "1rem" }}>
            {sections.map((indRef) => {
                return <button style={{ cursor: "pointer", padding: "0.3rem", borderRadius: "0.2rem", border: "1px solid grey", background: "gray" }} onClick={() => scrollToSection(indRef.ref)}>{indRef.label} </button>

            })}
        </div>

        {sections.map((section, index) => {

            return <div ref={section.ref} style={section.style}>
                <h1 style={{ paddingTop: "2rem" }}>{section.label}</h1>
            </div>
        })}
    </div>
}