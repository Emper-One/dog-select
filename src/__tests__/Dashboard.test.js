import React from 'react'
import { render, screen } from '@testing-library/react'
import Dashboard from '../components/Dashboard'

it('should correctly set default option', () => {
  render(<Dashboard />)
  expect(screen.getByRole('option', {value: ''}).selected).toBe(true)
})