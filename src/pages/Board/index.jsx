import { useContext } from "react";

import useUnauth from "../../hooks/useUnauth";
import { TokenContext } from "../../App";

import Header from "../../components/Header";
import GroupTask from "../../components/GroupTask";

const Board = () => {
  const token = useContext(TokenContext);
  useUnauth(token);

  return (
    <div>
      <Header />
      <GroupTask />
    </div>
  );
};

export default Board;
