import styled from 'styled-components'

export const InputFile = styled.input.attrs(props => ({
    type: "file"
}))`
    opacity: 0;
    position: absolute;
    pointer-events: none;
    width: 1px;
    height: 1px;
`

export const LabelFile = styled.label`
    align-items: center;
    background: rgb(42, 42, 42);
    border-radius: 5px;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    padding: 12px;
`

export const LogoWrapper = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 15px;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center center;
    cursor: pointer;
`

export const RemoveFile = styled.p`
    text-decoration: underline;
    margin-top: 15px;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: #ef6a37;
    }
`