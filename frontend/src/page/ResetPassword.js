import React, { useState } from 'react'
import { styled } from 'styled-components';
import { changePassword } from '../services/api/postMethods';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangePass = async() => {
        const status = await changePassword(email, password);
        if(status === 200){
            toast("Password Changed");
            navigate("/");
        } else {
            toast("Please Try Againg Later")
        }
    }

  return (
    <Wrapper>
        <Card>

            <Header>set new password</Header>

            <Group>
                <Label>Email</Label>
                <Input type='text' value={email} onChange={ (e) => setEmail(e.target.value) }></Input>
            </Group>

            <Group>
                <Label>New Password</Label>
                <Input type='text' value={password} onChange={ (e) => setPassword(e.target.value) }></Input>
            </Group>

            <Button onClick={ handleChangePass }>save</Button>
            <ToastContainer />
        </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(130, 82, 170, 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  min-height: 100vh;
  width: 99.9%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ac44d8;
  height: 47vh;
  width: 45vh;
  background: #111;
  color: white;
  border-radius: 30px;
  box-shadow: 0 0 5px 2px #ac44d8;
`;

const Header = styled.div`
    text-transform: uppercase;
    font-size: 20px; 
    font-weight: 600;
    margin: 40px 0 30px 0;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-bottom: 10px;
`;

const Label = styled.label`
    font-size: 15px;
    font-weight: 500;
`;

const Input = styled.input`
    padding: 6px 20px;
    background: #333;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #fff;
`;

const Button = styled.button`
    padding: 7px 20px;
    border: 1px solid #8E44AD;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
    border-radius: 5px;
    margin-top: 30px;

    &:hover{
        background: #8E44AD;
    }

    &:active{
        transform: scale(0.95);
    }
`;

export default ResetPassword