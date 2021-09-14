import React from 'react'
import { Layout } from '../components/Layout'
import { SubmitButton } from '../components/SubmitButton'
import { useStateValue } from '../Context'

// no named export - user page
export default () => {
  const [, dispatch] = useStateValue()

  const handleOnClick = () => dispatch({ type: 'removeAuth' })
  return (
    <Layout title='User' subtitle='Aqui puedes cerrar sessión'>
      <SubmitButton onClick={handleOnClick}>Cerrar sesión</SubmitButton>
    </Layout>
  )
}
