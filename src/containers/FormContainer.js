/**
 * Created by OunknownO on 30.01.2017..
 */

            import React, {Component} from 'react';
            import SearchBar from '../components/SearchBar';
            import {connect} from "react-redux"
            import {fetchPokemonData, mPkArrayAdd, mPkArrayRemove} from "../actions/pokemon-apiActions";
            import PokemonInfo from '../components/PokemonInfo';
            import { Button, Form, FormGroup, Label, Col, Container, Row,  Card, CardImg, CardText, CardBlock,
                CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

            @connect((store) => {
                return {
                    name: store.reducer.name,
                    weight: store.reducer.weight,
                    height: store.reducer.height,
                    move1: store.reducer.move1,
                    move2: store.reducer.move2,
                    move3: store.reducer.move3,
                    move4: store.reducer.move4,
                    sprite: store.reducer.sprite,
                    pokemon:store.reducerAList.pokemon,
                    mPk: store.mPkArray.mPk,
                }
            })

            class FormContainer extends Component {

                constructor(props) {
                    super(props);
                    this.state = {
                        modal: false
                    };

                    this.toggle = this.toggle.bind(this);
                }


                /* Bootstrap function needed for modal to work */

                toggle() {
                    this.setState({
                        modal: !this.state.modal
                    });
                }

                /* Adding to pokemon list*/

                addToMyPokemonList(e, name) {
                    this.props.dispatch(mPkArrayAdd(name))
                }

                /* Removing from pokemon list */

                removeFromMyPokemonList(e, name) {
                    this.props.dispatch(mPkArrayRemove(name))
                }

                /* Fetching wanted pokemon */

                handleFormSubmit(e) {
                    e.preventDefault();
                    var pName = e.target.PokemonName.value;
                    console.log(pName);
                    this.props.dispatch(fetchPokemonData(pName));
                }

                render() {
                    const { PokemonName, name, weight, height, move1, move2, move3, move4, sprite, pokemon, mPk } = this.props;

                    return (

                        <div>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    <PokemonInfo
                                        name={name}
                                        weight={weight}
                                        height={height}
                                        move1={move1}
                                        move2={move2}
                                        move3={move3}
                                        move4={move4}
                                        sprite={sprite}
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={(e)=>{this.addToMyPokemonList(e, name); this.toggle()}}>Catch</Button>{' '}
                                    <Button color="primary" onClick={(e)=>{this.removeFromMyPokemonList(e, name); this.toggle()}}>Relase</Button>{' '}
                                </ModalFooter>
                            </Modal>



                            <Form inline onSubmit={this.handleFormSubmit.bind(this)} className="form_positioning">

                                <FormGroup className="form_group_box">

                                    <Col xs="12" sm="12" md="6" lg="6" >

                                        <Label>{this.props.label}</Label>

                                    </Col>

                                    <SearchBar
                                        name="PokemonName"
                                        type="text"
                                        value={this.props.PokemonName}
                                        placeholder="search"
                                    />
                                </FormGroup>{''}
                                <Col xs="12" sm="12" md="3" lg="3">

                                    <Button color="primary" type="submit" className="" value='Submit' placeholder="Search" onClick={this.toggle} >Search</Button>{''}

                                </Col>

                            </Form>
                         </div>
                    );
                }
            }

            export {FormContainer};


