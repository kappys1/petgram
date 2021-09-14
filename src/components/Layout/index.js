import React from 'react'
import { Helmet } from 'react-helmet'
import { Title, SectionInApp } from './styles'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | petgram 🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <SectionInApp>
        {title && <Title>{title}</Title>}
        {children}
      </SectionInApp>
    </>
  )
}
