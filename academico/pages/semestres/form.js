import Pagina from '@/components/Pagina'
import semestreValidator from '@/validators/semestreValidato'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { mask } from 'remask'

const form = () => {
  
  const { push } = useRouter()
  const {register, handleSubmit, setValue, formState:{errors}} = useForm()

  function salvar (dados) {
    axios.post('/api/semestres', dados)
    push('/semestres')
  }

  function handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')
    setValue(name, mask(value, mascara))
  }
  
  return (
    <Pagina titulo="Semestres">

      <Form>
        
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', semestreValidator.nome)} one/>
           {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
         </Form.Group>

         <Form.Group className="mb-3" controlId="data_inicio">
           <Form.Label>Data Inicio: </Form.Label>
           <Form.Control type="text" mask= "99/99/9999" {...register('data_inicio', semestreValidator.data_inicio)} onChange={handleChange}/>
           {
              errors.data_inicio &&
              <small className='text-danger'>{errors.data_inicio.message}</small>
            }
         </Form.Group>

         <Form.Group className="mb-3" controlId="data_fim">
           <Form.Label>Data Fim: </Form.Label>
           <Form.Control type="text" mask= "99/99/9999" {...register('data_fim', semestreValidator.data_fim)} onChange={handleChange}/>
           {
              errors.data_fim &&
              <small className='text-danger'>{errors.data_fim.message}</small>
            }
         </Form.Group>

         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/semestres'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
