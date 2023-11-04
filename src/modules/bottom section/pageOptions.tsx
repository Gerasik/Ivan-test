import { useContext } from 'react';
import AppContent from '../../common/controllers/paginationController';
import styles from './pagination.module.scss';

const PageOptions = () => {
  const { setLimit, setPage } = useContext(AppContent);

  const handleLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const limit = parseInt(event.target.value);
    console.log('select: limit=', limit);
    setLimit(limit);
    setPage(1);
  };

  return (
    <select className={styles.select} onChange={handleLimit}>
      <option value="5">5 per page</option>
      <option value="10">10 per page</option>
      <option value="20">20 per page</option>
      <option value="50">50 per page</option>
    </select>
  );
};

export default PageOptions;
