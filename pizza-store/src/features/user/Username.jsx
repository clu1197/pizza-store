import { useSelector } from 'react-redux';

function Username() {
  // const user = useSelector((state) => state.user);
  // console.log(user);
  const userName = useSelector((state) => state.user.username);
  // console.log(userName);

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default Username;
