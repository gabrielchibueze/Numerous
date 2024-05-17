import { useEffect } from "react";

export default function UseOutsideHookRef(ref, handler) {

    useEffect(() => {
        function closeModal(event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            handler()
        }
        window.addEventListener("mousedown", closeModal)
        window.addEventListener("touchstart", closeModal)

        return () => {
            window.removeEventListener("mousedown", closeModal)
            window.removeEventListener("touchstart", closeModal)
        }

    }, [ref, handler])

}