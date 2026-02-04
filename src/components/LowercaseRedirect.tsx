import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function LowercaseRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    const lowercasePathname = pathname.toLowerCase();

    if (pathname !== lowercasePathname) {
      const newPath = `${lowercasePathname}${search}${hash}`;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
