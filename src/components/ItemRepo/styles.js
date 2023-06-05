import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    div {
        display: flex;
        gap:10px;
    }

    a {
        background-color: #141414;
        border-radius: 30px;
        padding: 10px;
        text-decoration: none; 
        color: #fafaf5;
    }

    a.remover {
        color: #FF0000;
  
    }

    a:hover{
        opacity: .8
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`