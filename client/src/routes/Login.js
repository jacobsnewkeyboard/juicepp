import React, {useState} from 'react';
import axios from "axios";
import Form from "../components/Form";
import Row from "../components/Row";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = (props) => {
    
    const [password, setPassword] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            password,
        };
        axios({
            url: "/auth/login",
            data: body,
            method: "post",
        }).then(res => {
            localStorage.setItem("cwcToken", res.data.token);
            props.history.push("/");
        })
    }

    

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Input
                    name="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Row>
            <Row>
                <Button>Submit</Button>
            </Row>
        </Form>
    );
};

export default Login;
