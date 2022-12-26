import "./index.css";
import Input from "../Input";

const Form = () => {
    return (
        <section className="section__form">
            <form className="section__form-content">
                <h2 className="section__form-title">Preencha os dados para criar o card do colaborador.</h2>
                <Input label="Nome" placeholder="Digite seu nome" />
                <Input label="Cargo" placeholder="Digite seu cargo" />
                <Input label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form;