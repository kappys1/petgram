// Category.test.js
/* global describe, it, expect */
import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { UserForm } from '.'

describe('UserForm', () => {
  it('snapshot', () => {
    act(() => {
      const { asFragment } = render(<UserForm title='test' />)
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('should render error', async () => {
    render(<UserForm title='test' error='is error' />)
    const items = await screen.findAllByText(/is error/)
    expect(items).toHaveLength(1)
  })
})
