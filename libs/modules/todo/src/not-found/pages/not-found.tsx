import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { env } from "@nx-todo/shared/environment"
import { Button } from "@nx-todo/shared/components"
import * as S from './not-found.styles'

export const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <S.Container>
      <S.Code>404</S.Code>
      <S.Title>Algo deu errado aqui :</S.Title>
      <S.Description>
        Estamos trabalhando nisso e vamos corrigí-lo o mais rápido possível
      </S.Description>
      <Button
        onClick={() => navigate(env.app.homepageUrl)}
      >
        Voltar
      </Button>
    </S.Container>
  )
}