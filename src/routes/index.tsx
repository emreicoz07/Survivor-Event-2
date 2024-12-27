import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Races } from '../pages/Races';
import { InfoCenter } from '../pages/InfoCenter';
import { Media } from '../pages/Media';
import { About } from '../pages/About';
import { Results } from '../pages/Results';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/races" element={<Races />} />
      <Route path="/info" element={<InfoCenter />} />
      <Route path="/media" element={<Media />} />
      <Route path="/about" element={<About />} />
      <Route path="/results" element={<Results />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}