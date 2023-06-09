import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'

const form = () => {
  
  const { push, query } = useRouter()
  const {register, handleSubmit, setValue} = useForm()

  useEffect(() => {
  
  if (query.id) {
    axios.get('/api/salas/' + query.id).then(resultado=>{
      const sala = resultado.data
      
      for(let atributo in sala){
      setValue(atributo, sala[atributo])
    }
  })    
}

  }, [query.id])

  function salvar (dados) {
    axios.put('/api/salas/' + dados.id, dados)
    push('/salas')
  }
  
  return (
    <Pagina titulo="Salas">

      <Form>
         
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome')}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="capacidade">
           <Form.Label>Capacidade: </Form.Label>
           <Form.Control type="text" {...register('capacidade')}/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="tipo">
           <Form.Label>Tipo: </Form.Label>
           <Form.Control type="text" {...register('tipo')}/>
         </Form.Group>
         
         
         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/salas'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
