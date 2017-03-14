import React, { Component } from 'react';
import './App.css';
import {FormContainer} from './containers/FormContainer';
import PokemonInfo from './components/PokemonInfo';
import {fetchAList, fetchPokemonData, mPkArrayAdd, mPkArray, mPkArrayRemove} from "./actions/pokemon-apiActions";
import {connect} from "react-redux"
import { Container, Row, Col,  Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.state = {
      shouldHide: true
    };

    this.toggle = this.toggle.bind(this);

  }

  /* Bootstrap function needed for modal to work */
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  /* Fetching list of all pokemons from api */
  componentDidMount(){
    this.props.dispatch(fetchAList());
  }

  /* Getting data on specific pokemon */
  pokemonInfo(event, pokemonName){
    event.preventDefault();
    var el = pokemonName;
    this.props.dispatch(fetchPokemonData(el))
  }

  /* Showing or hidding pokemon cards */
  showHideToggle(e){
    this.setState({shouldHide: this.state.shouldHide ? false : true});
  }

  /* List of users pokemons */
  myPokemonList(){
    this.props.dispatch(mPkArray());
  }

  /* Adding to pokemon list*/
  addToMyPokemonList(e, name) {
    this.props.dispatch(mPkArrayAdd(name))
  }

  /* Removing from pokemon list */
  removeFromMyPokemonList(e, name) {
    this.props.dispatch(mPkArrayRemove(name))
  }

  render() {
    const {  name, weight, height, move1, move2, move3, move4, sprite, pokemon, mPk} = this.props;

    let pokemonInfo;

    if (name == "") {

      pokemonInfo = null;

    }

    if (name != "") {

      pokemonInfo =
        <div className={this.state.shouldHide ? '' : 'hidden'} >
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{name}</ModalHeader>
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
        </div>;
    }

    const pokemonList = pokemon.map((pokemo, index) =>
        <Col lg="3" className={this.state.shouldHide ? '' : 'hidden'}>
        <Card key={index}>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBlock>
              <CardTitle>{pokemo.name}</CardTitle>
              <Button onClick={(e) => {this.pokemonInfo(e, pokemo.name); this.toggle();}}>Learn More</Button>
            </CardBlock>
          </Card>
        </Col>);

    const myPokemonList = mPk.map((mPkPok, index) =>

      <Col lg="3" className={this.state.shouldHide ? 'hidden' : ''}>
        <Card key={index}>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBlock>
            <CardTitle>{mPkPok}</CardTitle>
            <Button onClick={(e) => {this.pokemonInfo(e, mPkPok); this.toggle();}}>Learn More</Button>
          </CardBlock>
        </Card>
      </Col>);

    return (

      <Container className="App">
        <title>Pokedex</title>

            <Row className="App-header">
              <Col xs="12">

                <div className="center-on-page">

                  <div className="pokeball">

                    <div className="pokeball__button" onClick={(e) => {this.myPokemonList(e);this.showHideToggle(e)}}></div>

                  </div>

                </div>

                  <h2>Pokedex</h2>

              </Col>

              <Col xs="12">

                <FormContainer label="Nađi omiljenog pokemona:"/>

                <div className="mobile_my_pokemon">
                  <Button color="primary" size="sm" onClick={(e) => {this.myPokemonList(e);this.showHideToggle(e)}}>Moji pokemoni</Button>{' '}
                </div>
              </Col>

            </Row>

          <Row>



            {pokemonInfo}

            {pokemonList}

            {myPokemonList}

          </Row>

      </Container>
    );
  }
}

export default App;