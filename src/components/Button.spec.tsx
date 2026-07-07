import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Button'

describe('Button Component', () => {
  it('deve renderizar o botão com o rótulo correto', () => {
    render(<Button label="Clique aqui" />)

    const buttonElement = screen.getByRole('button', { name: /clique aqui/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('deve disparar a função onClick quando for clicado', async () => {
    const handleClick = vi.fn()
    render(<Button label="Clique aqui" onClick={handleClick} />)

    const buttonElement = screen.getByRole('button', { name: /clique aqui/i })

    // Simula o clique do usuário usando a API moderna do user-event
    await userEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
