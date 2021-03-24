import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './index.css'
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './validations';
import Input from '../Input';
import Form from '../Form';
import Select from '../Select';

export default function Avaliation({
    reg_student,
    id_professor,
    post_date
    }) {

        const disciplines = [{
            discipline_code: 223,
            name: "Vandor"
        },
        {
            discipline_code: 223,
            name: "Vandor"
        }]
        function testeDiscipline (disciplines) {
            const disciplinesArray = [{}]
            disciplines?.map((dis) => disciplinesArray.push({id_course:dis.discipline_code,name:dis.name}))
            return(
                disciplinesArray
            );       
        }
        
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const [isAnonymous,setIsAnonymous] = React.useState(false);
    
   function onSubmit(data) {
       const url = process.env.REACT_APP_API_HOST + "/post"
       
        const body = {
            reg_student: parseInt("190038969"),
            id_professor: parseInt("1"),
            content: data.comments,
            rating: parseFloat(data.note),
            discipline_code:"FGA01",
            is_anonymous: isAnonymous
         }
        
         fetch(url,{
             method: 'post',
             headers: {'Content-type':'application/json'},
             body: JSON.stringify(body)
         })
         .then(response => response)
         .then(rs => {
            console.log(rs)
            console.log(rs.json())
         })
                
            
         console.log(body)
        }
  return (
    <div className="avaliation">
        <div className="title">
            Avaliação
            <button type="button" className="buttonClose">X</button>
        </div>
        <div className="avaliationContent">
            <form onSubmit={handleSubmit(onSubmit)}>
               <Form.Field errorMsg={errors.nameProfessor?.message}><Input type="text" text="Nome do Professor" name="nameProfessor" register={register} value="sla"/></Form.Field> 
               <Form.Field errorMsg={errors.nameDiscipline?.message}><Select id="diciplines" options={testeDiscipline(disciplines)} name="id_course" register={register} /></Form.Field> 
               <Form.Field errorMsg={errors.note?.message}><Input type="number"  step="0.1" text="Nota" name="note" register={register} /></Form.Field> 
                <div className="typePost">Postagem:<br/>
                    <button type="button" className={(`button ${isAnonymous? "selected": ""}`)} onClick={() => setIsAnonymous(true)}>ANÔNIMA</button>
                    <button type="button" className={(`button ${isAnonymous === false? "selected": ""}`)} onClick={() => setIsAnonymous(false)}>PÚBLICA</button>
                </div>
                <div className="commentsPost">Descrição/Comentários:
                    <Form.Field errorMsg={errors.comments?.message}><textarea name="comments" ref={register} /></Form.Field> 
                </div>
                <button type="submit" className="buttonPost">POSTAR</button>
            </form>
        </div>
    </div>
  );
}
