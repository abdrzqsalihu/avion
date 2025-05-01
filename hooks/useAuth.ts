"use client";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const check = async () => {
      const res = await fetch("/api/auth/check");
      setIsAuthenticated(res.ok);
    };
    check();
  }, []);

  return { isAuthenticated };
};
