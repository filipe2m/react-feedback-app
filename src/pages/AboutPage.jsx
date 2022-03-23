import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or services</p>
        <p>Version: 1.0.1</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
