import {screen, render, cleanup } from '@testing-library/react'
import Modal from './index'

describe('Renders the modal as expected', () => {
  it('renders when isOpen prop is true', () => {
    render(<Modal isOpen={true} />)
    expect(screen.getByTestId('modal')).toBeInTheDocument()
    cleanup()
  })
})