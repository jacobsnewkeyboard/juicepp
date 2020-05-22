import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components"

import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import Row from "../components/Row";
import Image from "../components/Image";
import background from "../RestaurantBackground.jpg"
import logo from "../JuicingParty.png";

const Wrapper = styled.div`
    background-image: url(${background});
    background-size: cover;
    height: 800px;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const Home = (props) => {

    const [roomID, setRoomID] = useState("");

    const token = localStorage.getItem("cwcToken");

    const logout = () => {
        localStorage.removeItem("cwcToken");
        props.history.push("/login")
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push(`/room/${roomID}`)
    }


    if (token) {
        return (
            <Wrapper>
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Image src={logo} />
                    </Row>
                    <Row>
                        <Input
                            name="roomID"
                            placeholder="Room ID"
                            type="text"
                            value={roomID}
                            onChange={e => setRoomID(e.target.value)} />
                    </Row>
                    <Row>
                        <Button>Join Room</Button>
                    </Row>
                </Form>
                <br></br>
                <Form onSubmit={logout}>
                    <Row>
                        <Link to="/about">About</Link>
                    </Row>
                    <Row>
                        <Button>Log Out</Button>
                    </Row>
                </Form>
            </Wrapper>
        )
    } else {
        return (
            <Redirect to="/login" />
        )
    }
};

export default Home;