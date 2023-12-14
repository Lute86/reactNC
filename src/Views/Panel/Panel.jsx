import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import usePing from "../../hooks/usePing";
import Spinner from "../../Components/Spinner/Spinner";
import "./Panel.css";
import Sidebar from "../../Components/SideBar/SideBar";
import UserInfo from "../../Components/Panel/UserInfo";
import AccountInfo from "../../Components/Panel/AccountInfo";
import TransactionInfo from "../../Components/Panel/TransactionsInfo";
import { useGlobalState } from "../../Context/context";

function Panel() {
  const { ping, isLoading } = usePing();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [choice, setChoice] = useState("profile");
  const { loggedUser, setLoggedUser } = useGlobalState();
  const userJSON = localStorage.getItem('user');


  useEffect(() => {
    if (!token || !userJSON) {
      navigate("/login");
    }
    const checkToken = async () => {
      try {
        const connect = await ping("/auth/token", token);
        if (!connect) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setLoggedUser(null);
          navigate("/login");
        }
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLoggedUser(null);
        navigate("/login");
      }
    };

    checkToken();
  }, []);

  return (
    <div className="panel-container">
      <Sidebar choice={setChoice} />
      <div className="panel-content">
        {isLoading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div className="panel-components">
            <div className="panel-title">
              <h1>Panel</h1>
              <hr />
            </div>
            {userJSON && (
              <>
                {choice === "profile" && <UserInfo />}
                {choice === "accounts" && <AccountInfo />}
                {choice === "transactions" && <TransactionInfo />}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Panel;
