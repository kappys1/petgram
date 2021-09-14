import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(238, 238, 238);
  padding: 1.5em 1.5em 3em;
  box-sizing: border-box;
  font-size: 1em;
  margin-bottom: 1em;
`

export const Input = styled.input`
  /* border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%; */
  width: 100%;
  background-color: rgb(250, 250, 250);
  border: none;
  height: 35px;
  border-radius: 3px;
  margin-bottom: 0.6em;
  box-sizing: border-box;
  padding: 0px 1em;
  box-shadow: rgb(238 238 238) 0px 0px 0px 1px;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  margin-bottom: .5em;
  font-size: 1.2em;
  font-weight: 500;
  padding: 8px 0;
`
export const Error = styled.span`
  color: red;
  font-size: .8rem;
  margin: 1rem 0;
`
