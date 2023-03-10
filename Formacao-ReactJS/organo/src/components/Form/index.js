import "./index.css";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import HideFormButton from "../HideFormButton";
import { useState } from "react";

const Form = (props) => {
    const [name, setName] = useState('');
    const [charge, setCharge] = useState('');
    const [image, setImage] = useState('');
    const [crew, setCrew] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.forRegisteredUser({ 
            name, 
            charge, 
            image, 
            crew 
        });
        setName('');
        setCharge('');
        setImage('');
        setCrew('');
    }

    const onHideForm = () => {
        const form = document.querySelector('.section__form-content');
        if (form.classList.contains('hide')) {
            form.classList.remove('hide');
        } else {
            form.classList.add('hide');
        }
    }

    return (
        <section className="section__form">
            <form className="section__form-content " onSubmit={onSave}>
                <h2 className="section__form-title">Preencha os dados para criar o card do colaborador.</h2>
                <Input
                    label="Nome"
                    required={true}
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <Input 
                    label="Cargo" 
                    required={true} 
                    placeholder="Digite seu cargo" 
                    value={charge}
                    onChange={value => setCharge(value)}
                />
                <Input 
                    label="Imagem" 
                    placeholder="https://..." 
                    value={image}
                    onChange={value => setImage(value)}
                />
                <Select 
                    label="Time" 
                    itens={props.crews} 
                    required={true} 
                    value={crew}
                    onChange={value => setCrew(value)}
                />
                <Button>Criar card</Button>
            </form>
            {props.users.length > 0 && <HideFormButton onClick={onHideForm} />}
        </section>
    )
}

export default Form;