import styles from "./SobreMim.module.css"
import PostModelo from "Componentes/Menu/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpeg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Denise!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Denise sorrindo"
                className={styles.fotoSobreMim}
            />

        </PostModelo>
    )
}
