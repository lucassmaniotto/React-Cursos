import "./index.css";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

const Form = () => {

    const crews = [
        '',
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (event) => {
        event.preventDefault();
        console.log('Salvando...');
    }

    return (
        <section className="section__form">
            <form className="section__form-content" onSubmit={onSave}>
                <h2 className="section__form-title">Preencha os dados para criar o card do colaborador.</h2>
                <Input label="Nome" required={true} placeholder="Digite seu nome" />
                <Input label="Cargo" required={true} placeholder="Digite seu cargo" />
                <Input label="Imagem" placeholder="Informe o endereço da imagem" />
                <Select label="Time" itens={crews} required={true}/>
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;