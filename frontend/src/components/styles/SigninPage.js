import styled from 'styled-components';

export const SigninPageStyle = styled.div`

    /* display: flex;
    justify-content: center;
    align-items: center;  */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
        margin-bottom: 3rem;
    }


    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        max-width: 550px;
        margin: 0 auto;

        @media screen and (min-width: 745px){
            width: 50%;
        }
    }

    .form-input {
        background-color: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        padding: 1rem;
        border-bottom: solid 1px grey;
        margin-bottom: 3rem;

        &:focus {
            outline: none;
        }
    }
    
    .form-submit {
        background-color: black;
        color: white;
        border: none;
        padding: 1rem;
        border-radius: .5rem;
        margin-bottom: 2rem;
    }

    .link-out {
        color: cadetblue;
    }
`