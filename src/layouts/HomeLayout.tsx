import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import useLocation from '../api/getLocation';
import { Header } from '../components/Header';
import { useTheme } from '../contexts';
import { Theme } from '../utils';

export function HomeLayout() {
  const { city } = useParams();
  const { theme, setTheme } = useTheme();
  const { data: location, isPending: isLocationPending } = useLocation();
  const navigate = useNavigate();

  document.body.className = `${theme === Theme.LIGHT ? 'bg-dark-gradient text-white' : 'bg-light-gradient'} min-h-screen`;
  document.body.style.transition = 'background-color 0.5s linear';

  useEffect(() => {
    if (!isLocationPending && !city) navigate(`/${location.city.name}`);
  }, [isLocationPending]);

  return (
    <div className="p-3">
      <Header theme={theme} setTheme={setTheme} />
      <Outlet />
    </div>
  );
}
