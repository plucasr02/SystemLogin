import React from "react";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();



    return (
        <C.Container>
            <C.Title>Home</C.Title>
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
            sair
            </Button>
        </C.Container>
    );
};

export default Home;