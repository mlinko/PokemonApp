/**
 * Created by OunknownO on 31.01.2017..
 */

import React, {Component} from 'react';
import { Card, CardBlock, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

const PokemonInfo = (props) => (
    <div>
        <Row>
            <Col xs="12" sm="12" md="12" lg="12">
                <CardTitle>Izgled Pokemona</CardTitle>
            </Col>

            <Col xs="12" sm="12" md={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3 }}>
                <Card>
                    <CardImg top width="100%" src={props.sprite} alt="Slika pokemona" />
                </Card>
            </Col>
        </Row>
        <Row>
            <Col xs="12" sm="12" md="6" lg="6">
                <CardTitle>Težina: </CardTitle>
                <Card>
                    <CardBlock>
                        <CardText>{props.weight} lbs</CardText>
                    </CardBlock>
                </Card>
            </Col>

            <Col xs="12" sm="12" md="6" lg="6">
                <CardTitle>Visina:</CardTitle>
                <Card>
                    <CardBlock>
                        <CardText>{props.height} cm</CardText>
                    </CardBlock>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col xs="12" sm="12" md="12" lg="12">
                <CardTitle>Potezi koje zna:</CardTitle>
            </Col>

            <Col xs="12" sm="12" md="6" lg="6">
                <Card>
                    <CardBlock>
                        <CardText>{props.move1}</CardText>
                    </CardBlock>
                </Card>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6">
                <Card>
                    <CardBlock>
                        <CardText>{props.move2}</CardText>
                    </CardBlock>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col xs="12" sm="12" md="6" lg="6">
                <Card>
                    <CardBlock>
                        <CardText>{props.move3}</CardText>
                    </CardBlock>
                </Card>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6">
                <Card>
                    <CardBlock>
                        <CardText>{props.move4}</CardText>
                    </CardBlock>
                </Card>
            </Col>
        </Row>
    </div>
);
export default PokemonInfo;