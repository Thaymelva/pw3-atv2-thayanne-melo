import React, { useState } from 'react';
import axios from 'axios';

function RegisterUser() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [telefoneAluno, setTelefoneAluno] = useState("");
    const [telefoneResponsavel, setTelefoneResponsavel] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    function createUser(e) {
        e.preventDefault();

        const userData = {
            nome,
            cpf,
            rg,
            telefone_aluno: telefoneAluno,
            telefone_responsavel: telefoneResponsavel,
            email,
            data_nascimento: dataNascimento
        };

        axios.post('https://reqres.in/api/users', userData)
            .then((response) => {
                console.log(response);
                alert(JSON.stringify(response.data));
            }).catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    return (
        <div className="RegisterUser-container">
            <h3>Formulário de Cadastro</h3>
            <form className="RegisterUser-form" onSubmit={createUser}>
                <div className='RegisterUser-content-inputs'>
                    <input
                        type='text'
                        placeholder='Digite seu nome...'
                        value={nome}
                        className='RegisterUser-input'
                        onChange={(e) => { setNome(e.target.value) }}
                    />
                    <input
                        type='text'
                        placeholder='Digite seu CPF...'
                        value={cpf}
                        className='RegisterUser-input'
                        onChange={(e) => { setCpf(e.target.value) }}
                    />
                    <input
                        type='text'
                        placeholder='Digite seu RG...'
                        value={rg}
                        className='RegisterUser-input'
                        onChange={(e) => { setRg(e.target.value) }}
                    />
                    <input
                        type='text'
                        placeholder='Digite seu telefone (aluno)...'
                        value={telefoneAluno}
                        className='RegisterUser-input'
                        onChange={(e) => { setTelefoneAluno(e.target.value) }}
                    />
                    <input
                        type='text'
                        placeholder='Digite seu telefone (responsável)...'
                        value={telefoneResponsavel}
                        className='RegisterUser-input'
                        onChange={(e) => { setTelefoneResponsavel(e.target.value) }}
                    />
                    <input
                        type='email'
                        placeholder='Digite seu email...'
                        value={email}
                        className='RegisterUser-input'
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <input
                        type='date'
                        placeholder='Digite sua data de nascimento...'
                        value={dataNascimento}
                        className='RegisterUser-input'
                        onChange={(e) => { setDataNascimento(e.target.value) }}
                    />
                </div>
                <div className='RegisterUser-content-btn'>
                    <button type='submit' className='RegisterUser-button'>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterUser;
