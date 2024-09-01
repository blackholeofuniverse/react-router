import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="text-center p-4 bg-slate-100 rounded-lg m-10">
      User: {id}
    </div>
  );
};

export default User;
