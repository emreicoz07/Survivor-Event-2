import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppRoutes } from './routes';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </I18nextProvider>
  );
}