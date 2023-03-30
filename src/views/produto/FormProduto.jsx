import React from "react";
import InputMask from 'react-input-mask';
import { Form, Input, TextArea, Button, Select,Container, Divider,Icon } from 'semantic-ui-react'



class FormCliente extends React.Component{

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group>

									<Form.Input
										required
										fluid
										label='Título'
										width={10}
                                        maxLength="20"
                                        placeholder="Informe o título do produto"
									/>

									<Form.Input
										required
                                        fluid
                                        width={6}
                                        maxLength="2"
                                        placeholder="Informe o código do produto    "
										label='Código do Produto'>
                                                                                                                  
									</Form.Input>

                                    </Form.Group>
                                    <Form.Field
                                    id='form-textarea-control-opinion'
                                    control={TextArea}
                                    label='Descrição'
                                    placeholder='Informe a descrição do produto'
                                    />
                                
                                <Form.Group>
                                    

									<Form.Input
										fluid
										label='Valor Unitário'
                                        width={6}>				
									</Form.Input>

									<Form.Input
										fluid
										label='Tempo de Entrega Mínimo em minutos'
                                        maxLength="2"
                                        placeholder="30"
                                        width={6}>
										
									</Form.Input>

                                    <Form.Input
                                        fluid
                                        label='Tempo de Entrega Mínimo em minutos'
                                        maxLength="2"
                                        placeholder="40"
                                        width={6}
                                    >
                
                                    </Form.Input>

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormCliente;