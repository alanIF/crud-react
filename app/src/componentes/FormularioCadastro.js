import React, { useEffect, useState } from 'react';

// props é receber entrada, vai ser cadastrar e editar
const  FormularioCadastro = (props) =>{
    const camposIniciaisValores={
        nome:'',
        telefone:'',
        email:'',
        endereco:''
    };
    let [values, setValues] = useState(camposIniciaisValores);
    // preencher formulario automatico na hora de editar    
    useEffect( ()=>{
        if(props.idatual == ''){
            setValues({
                ...camposIniciaisValores
            })
        }else{
            setValues({
                ...props.dadosPacientes[props.idatual]
            })
        }
            
    }, [props.idatual, props.dadosPacientes])
    const manipuladorInputChange = e =>{
        let {name, value} = e.target

        setValues({
                ...values,
                [name]:value
        }
        )
    }
    const manipuladorEnvio = e =>{
        e.preventDefault()
        //chamar o metodo que vai adicionar os dados no bd
        props.addEedit(values)
    }
    return (
            <form autoComplete="off" onSubmit={manipuladorEnvio}>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>

                    </div>
                    <input className="form-control" placeholder="Nome" name="nome" value={values.nome} onChange={manipuladorInputChange}></input>
                </div>
                <div className="row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div  className="input-group-text">
                                <i className="fa fa-phone"></i>
                            </div>

                        </div>
                        <input className="form-control" placeholder="Telefone" name="telefone" value={values.telefone} onChange={manipuladorInputChange}></input>
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div  className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>

                        </div>
                        <input className="form-control" placeholder="Email" name="email" value={values.email} onChange={manipuladorInputChange}></input>
                    </div>
                </div>
                <div className="form-group">
                            
                            <textarea className="form-control" placeholder="" name="endereco" value={values.endereco} onChange={manipuladorInputChange}></textarea>

                        </div>
                  <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary btn-block"/>
                  </div>   
            </form>
           
    )

}

export default FormularioCadastro;