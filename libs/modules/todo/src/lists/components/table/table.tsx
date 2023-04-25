import { FaEdit, FaTrash } from "react-icons/fa"
import * as S from './table.styles'

type TableProps = {
  text: string;
  onDelete: () => void
  onEdit: () => void
}

export const Table: React.FC<TableProps> = ({ text, onDelete, onEdit }) => {
  return (
    <li>
      <div>
        <p>{text}</p>
      </div>

      <S.IconGroup>
        <FaEdit onClick={onEdit} />
        <FaTrash onClick={onDelete} />
      </S.IconGroup>
    </li>
  )
}