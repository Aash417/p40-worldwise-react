import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';

function Homepage() {
  return (
    <div>
      <PageNav />
      <Link to="/app">Go to app page</Link>
    </div>
  );
}

export default Homepage;
