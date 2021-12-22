import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Page from './index'

describe('Check if home anchor tag for presence of active status', () => {
  const renderPage = (current) => render(
  <MemoryRouter initialEntries={current}>
    <Page />
  </MemoryRouter>)
  //check if home is current
  it('should have aria-current value of page', () => {
    renderPage(['/'])
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveAttribute('aria-current', 'page')
  })
  //check if home is not current
  it('should have no aria-current', () => {
    renderPage(['/todo/1'])
    const homeLink = screen.getByText('Home')
    expect(homeLink).not.toHaveAttribute('aria-current', 'page')
  })
})