import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';

const StemCellsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-primary">
          {t('navbar.services_submenu.stem_cells')}
        </h1>
      </div>
    </Layout>
  );
};

export default StemCellsPage;
