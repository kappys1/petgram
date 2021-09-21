import { useMutation } from '@apollo/client'
import { gql } from 'apollo-boost'

export const REGISTER = gql`
  mutation signup ($input: UserCredentials!) {
    signup (input: $input)
  }
`

export const useRegister = () => {
  const [register, { loading, error, data }] = useMutation(REGISTER)
  return { register, loading, error, data }
}
