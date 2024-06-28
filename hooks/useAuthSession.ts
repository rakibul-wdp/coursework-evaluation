import { clearAuth, setUser } from "@/redux/auth/auth.slice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          const response = await fetch("/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            dispatch(setUser({ username: data.username }));
          } else {
            dispatch(clearAuth());
          }
        } catch (error) {
          dispatch(clearAuth());
        }
      }
      setIsLoading(false);
    };
    checkAuth();
  }, [token, dispatch]);

  return { user, isLoading };
};

export default useAuthSession;
