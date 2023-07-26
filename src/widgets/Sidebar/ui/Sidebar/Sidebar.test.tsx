import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWIthTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('Sidebar is rendered', () => {
    renderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    renderWithTranslation(<Sidebar/>)
    const toggleBth = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBth)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
