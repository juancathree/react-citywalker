import { useSelector } from 'react-redux';
import './info.scss';

function Info() {
   const user = useSelector((state) => state.user.data);

   return (
      <div className="info-user">
         <p className="info-user__email">
            <span className="bold">Email: </span>
            {user.email}
         </p>
         <p className="info-user__nickname">
            <span className="bold">Nickname: </span>
            {user.nickname}
         </p>
      </div>
   );
}

export default Info;
