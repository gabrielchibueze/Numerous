import { useEffect } from "react";

export default function UseRefCloseModalHook(ref, closeModal) {

    useEffect(() => {
        function closeModalWithRef() {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }

            closeModal()
        }

        document.addEventListener("mousedown", closeModalWithRef)
        document.addEventListener("touchstart", closeModalWithRef)

        return ()=>{
            document.removeEventListener("mousedown", closeModalWithRef)
            document.removeEventListener("touchstart", closeModalWithRef)
        }
    }, [ref, closeModal])
}