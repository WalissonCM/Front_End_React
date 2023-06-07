import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io'

const form = () => {
  
  const { push } = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm()

  function salvar (dados) {
    axios.post('/api/alunos', dados)
    push('/alunos')
  }
  
 return (
    <Pagina titulo="Alunos">

      <Form>
         
         <Form.Group className="mb-3" controlId="nome">
           <Form.Label>Nome: </Form.Label>
           <Form.Control type="text" {...register('nome', {require:'*Campo Obrigatório'})}/>
            {
              errors.nome &&
              <small className='text-danger'>{errors.nome.message}</small>
            }
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
           <Form.Label>Cpf: </Form.Label>
           <Form.Control type="text" {...register('cpf', {require:'*Campo Obrigatório'})}/>
            {
              errors.cpf &&
              <small className='text-danger'>{errors.cpf.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="matricula">
           <Form.Label>Matricula: </Form.Label>
           <Form.Control type="text" {...register('matricula', {require:'*Campo Obrigatório'})}/>
            {
              errors.matricula &&
              <small className='text-danger'>{errors.matricula.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="email">
           <Form.Label>Email: </Form.Label>
           <Form.Control type="text" {...register('email', {require:'*Campo Obrigatório'})}/>
            {
              errors.email &&
              <small className='text-danger'>{errors.email.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="telefone">
           <Form.Label>Telefone: </Form.Label>
           <Form.Control type="text" {...register('telefone', {require:'*Campo Obrigatório'})}/>
            {
              errors.telefone &&
              <small className='text-danger'>{errors.telefone.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="cep">
           <Form.Label>Cep: </Form.Label>
           <Form.Control type="text" {...register('cep', {require:'*Campo Obrigatório'})}/>
            {
              errors.cep &&
              <small className='text-danger'>{errors.cep.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="logradouro">
           <Form.Label>Logradouro: </Form.Label>
           <Form.Control type="text" {...register('logradouro', {require:'*Campo Obrigatório'})}/>
            {
              errors.logradouro &&
              <small className='text-danger'>{errors.logradouro.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="complemento">
           <Form.Label>Complemento: </Form.Label>
           <Form.Control type="text" {...register('complemento', {require:'*Campo Obrigatório'})}/>
            {
              errors.complemento &&
              <small className='text-danger'>{errors.complemento.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="numero">
           <Form.Label>Numero: </Form.Label>
           <Form.Control type="text" {...register('numero', {require:'*Campo Obrigatório'})}/>
            {
              errors.numero &&
              <small className='text-danger'>{errors.numero.message}</small>
            }
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="bairro">
           <Form.Label>Bairro: </Form.Label>
           <Form.Control type="text" {...register('bairro', {require:'*Campo Obrigatório'})}/>
            {
              errors.bairro &&
              <small className='text-danger'>{errors.bairro.message}</small>
            }
          </Form.Group>
         
         <div className='text-center'>
         <Button variant="success" onClick={handleSubmit(salvar)}><AiOutlineCheck className='me-1'/> Salvar</Button>
         <Link href={'/alunos'} className="ms-2 btn btn-danger"><IoMdArrowRoundBack className='me-1'/>Voltar</Link>
         </div>
      
      </Form>

    </Pagina>
  )
}

export default form
