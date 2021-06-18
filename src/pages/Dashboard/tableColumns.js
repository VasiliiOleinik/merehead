import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { deleteUser} from 'src/actions/user';

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Имя',
  sort: true
}, {
  dataField: 'surname',
  text: 'Фамилия',
  sort: true
}, {
  dataField: 'desc',
  text: 'Описание',
  sort: true
},
{
  dataField: 'id',
  text: 'Действия',
  sort: false,
  formatter: (id) => {
    console.log('id', id);
    return (
      <div>
        <a href={id} className="mr-3" title="Редактирование пользователяф">
          <PencilSquare />
        </a>
        <button title="Удалить пользователя" onClick={() => deleteUser()}>
          <Trash color="red" />
        </button>
      </div>
    )
  },
}];

export default columns;