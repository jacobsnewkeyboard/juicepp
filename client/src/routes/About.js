import React from "react";
import { Redirect, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import Button from "../components/Button";
import Image from "../components/Image";
import Form from "../components/Form";
import Row from "../components/Row";

import BigTable from "../BigTable.jpg"
import BikeDelivery from "../BikeDelivery.jpg"
import ChefSmiling from "../ChefSmiling.jpg"
import FastKitchen from "../FastKitchen.jpg"
import ReadingMenu from "../ReadingMenu.jpg"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: black
  `

const Span = styled.span`
    font-size: ${props => (props.emphasis ? "2.5em" : "1.5em")};
`

const Wrapper = styled.div`  
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;


const Caption = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 75%;
  margin-left: 2em;
`;

const Div = styled.div`
  align-self: center;
`;

const appear = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`

const Appear = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${appear} 2s;
`

const About = (props) => {

    const token = localStorage.getItem("cwcToken");
    const logout = () => {
        localStorage.removeItem("cwcToken");
        props.history.push("/login")
    }

    if (token) {
        return (
            <Wrapper>
                <Appear>

                    <Title>Welcome to <Span emphasis>JuicingParty</Span></Title>
                    <Caption>
                        <Title>Where we celebrate nutritional food stuff with friends around the world</Title>
                    </Caption>
                    <br>
                    </br>
                    <Caption>
                        <Title>Where you can watch your favorite restaurants prepare food</Title>
                    </Caption>
                    <Image src={FastKitchen} />

                    <Caption>
                        <Title>A place to ask about the best food on the menu</Title>
                    </Caption>
                    <Image src={ReadingMenu} />

                    <Caption>
                        <Title>Where you can order your food, talk to friends, and see what's being made</Title>
                    </Caption>
                    <Image src={ChefSmiling} />

                    <Caption>
                        <Title>Watch your delivery person pick up your food and know that it's on its way</Title>
                    </Caption>
                    <Image src={BikeDelivery} />


                    <Title>Let's <Span emphasis>Celebrate</Span> around the world</Title>
                    <Image src={BigTable} />

                    <br></br>
                    <Div>
                        <Form onSubmit={logout}>
                            <Row>
                                <Link to="/">Home</Link>
                            </Row>
                            <Row>
                                <Button>Log Out</Button>
                            </Row>
                        </Form>
                    </Div>
                </Appear>

            </Wrapper>
        )
    } else {
        return (
            <Redirect to="/login" />
        )
    }
};

export default About;