import { useState } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"


export default function EffectSection() {
    const [modal, setModal] = useState(false)

    function openModal() {
        setModal(true)
    }


    return (
        <section>
            <h3>Effeccts</h3>

            <Button onClick={openModal}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, corporis hic vero cumque, iure delectus quae culpa aut temporibus quas eos numquam nesciunt, quidem eveniet cupiditate tenetur. Quos, adipisci natus.</p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>
        </section>

    )        
}