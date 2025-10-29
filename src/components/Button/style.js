import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px: solid #CDCDCD;
    background-color: #2cc0ffff;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }

    /* Style for Mobile */
    @media (max-width: 480px) {
        height: 4rem;
        min-width: 4rem;

        input {
            font-size: 24px;
            height: 80px;
        }
    }
`