// Category.test.js
/* global describe, it, expect */
import React from 'react'
// import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { SubmitButton } from '.'

describe('SubmitButton', () => {
  it('snapshot', () => {
    const { asFragment } = render(<SubmitButton><span>test</span></SubmitButton>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render spinner', () => {
    render(<SubmitButton isLoading>test</SubmitButton>)
    expect(screen.getByTitle('loading')).toBeInTheDocument()
  })
})
