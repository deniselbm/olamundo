import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpeg';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu blog pessoal! Sou Denise Moreira, estudante de programação e compartilho aqui meus estudos e novos projetos. Fique a vontade para explorar e aprender junto comigo!
                </p>
            </div>

            <div className={styles.imagens} >
                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto Denise sorrindo"
                />
            </div>
        </div>
    )
}