import styles from "./Navbar.module.css";
import { Link , NavLink} from "react-router-dom"

const Navbar = ()=>{
    return(<div className ={styles.Navbar}>
        <NavLink to="/" className={styles.logo}>
            Movie Mania
        </NavLink>

        <div className={styles.navbar_links}>
            <NavLink
                to="/popular"
                className={({ isActive }) =>
                    isActive ? styles.active : ""
                }
            >
                Popular
                <i className="fa-solid fa-fire"></i>
            </NavLink>

            <NavLink
                to="/top-rated"
                className={({ isActive }) =>
                    isActive ? styles.active : ""
                }
            >
                Top Rated
                <i className="fa-solid fa-star"></i>
            </NavLink>

            <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                    isActive ? styles.active : ""
                }
            >
                Upcoming
                <i className="fa-solid fa-face-grin-stars"></i>
            </NavLink>
        </div>
    </div>)
}
export default Navbar;
