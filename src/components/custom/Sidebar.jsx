import { Link ,useNavigate } from "react-router-dom";


export default function Sidebar(){
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add your logout logic here
        navigate('/onboarding');
      };
    return (
        <aside style={{ width: '200px', padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <nav>
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="statistics">Statistics</Link>
            </li>
            <li>
              <Link to="hub">Hub</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </aside>
    )

}


function MenuItem(){
    
}