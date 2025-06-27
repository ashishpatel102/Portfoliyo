import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from '../common/LoginProvider';
import HostIP  from './HostIP';

function useVerifyUser() {
  const [, setLogin] = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
       const res = await fetch(HostIP + "/api/verify", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        });

        const data = await res.json();

        if (data.success) {
          setLogin(data);
        } else {
          setLogin(null);
        }
      } catch (err) {
        setLogin(null);
      }
    };

    checkAuth();
  }, []);
}

export default useVerifyUser;
