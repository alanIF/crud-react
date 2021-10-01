
import {React, useState,useEffect} from 'react';
import FormularioCadastro from './FormularioCadastro';

import fireDb from '../firebase';

const  Cadastro = () =>{
    let [dadosPacientes, setDadosPacientes] = useState({})

    // para botao de editar e remover
    let [idatual, setIdatual] = useState('');

    // listar dados do firebase
    useEffect( ()=>
    {
        fireDb.child('pacientes').on('value', dbPhoto=>{
            if(dbPhoto.val()!=null){
                setDadosPacientes({
                    ...dbPhoto.val()
                })
            }else{
                setDadosPacientes({})
            }
        })
    }, [])
    const addEedit  = obj =>{
        // adicionar fire
        if(idatual== ''){
            fireDb.child('pacientes').push(
                obj, 
                error=>{
                    if(error){
                        console.log(error)
                    }else{
                        setIdatual('')
                    }
                }
                
            )
            // atualizar
        }else{
            fireDb.child(`pacientes/${idatual}`).set(
                obj, 
                error =>{
                    if(error){
                        console.log(error)
                    }
                }

            )

        }
    }
    // remover
    const deletePaciente = key =>{
            if(window.confirm('Deseja excluir esse registro? ')){
                fireDb.child(`pacientes/${key}`).remove(
                    error =>{
                        if(error){
                            console.log(error)
                        }
                    }
                )
            }
    }
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <h1 className="display-4">Cadastro de Pacientes</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FormularioCadastro {...({addEedit,idatual,dadosPacientes})}></FormularioCadastro>
                </div>
                <div className="col-md-7">
                    <h2>Lista de Pacientes</h2>
                    <table className="table table-borderless table-stripped">
                        <thead>
                            <tr>
                            <th>
                                Nome
                            </th>
                            <th>
                                Telefone
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                               Endereco
                            </th>
                            <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(dadosPacientes).map(
                                    id=>{
                                        return <tr key={id}>
                                                <td>{dadosPacientes[id].nome}</td>
                                                <td>{dadosPacientes[id].telefone}</td>
                                                <td>{dadosPacientes[id].email}</td>
                                                <td>{dadosPacientes[id].endereco}</td>
                                                <td>
                                                     <a className="btn btn-primary" onClick={  ()=>{setIdatual(id)} }><i className="fa fa-pencil-alt" ></i>
                                                         </a>   
                                                         <a className="btn btn-danger" onClick={()=> deletePaciente(id)}><i className="fa fa-trash"></i>
                                                         </a>   
                                                </td>


                                        </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default Cadastro;