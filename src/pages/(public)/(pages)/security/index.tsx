import React,{ useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  children: React.ReactNode;
}

const Security: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/security/login');
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default Security;
