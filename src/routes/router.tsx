import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../proxies'
import { Login, Register } from '@todo/modules/authentication'
import { Lists, NotFound } from '@todo/modules/todo'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="cadastrar-conta" element={<Register />} />
        <Route
          path="*"
          element={<Navigate to="/pagina-nao-encontrada" replace />}
        />
        <Route path="pagina-nao-encontrada" element={<NotFound />} />
        <Route path="/" element={<ProtectedRoute component={Lists} />} />
      </Routes>
    </BrowserRouter>
  )
}