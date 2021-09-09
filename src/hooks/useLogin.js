import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const LOGIN = gql`
  mutation login ($input: UserCredentials!) {
    login (input: $input)
  }
`

export const useLogin = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN)
  return { login, loading, error, data }
}
