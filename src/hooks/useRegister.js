import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const REGISTER = gql`
  mutation signup ($input: UserCredentials!) {
    signup (input: $input)
  }
`

export const useRegister = () => {
  const [register, { loading, error, data }] = useMutation(REGISTER)
  return { register, loading, error, data }
}
