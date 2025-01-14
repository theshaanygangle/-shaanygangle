import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Projects() {

  const { theme, toggleTheme } = useTheme();
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="projects" className={styles.container}>

      <h1 className="sectionTitle">Projects</h1> 

      <div className={styles.projectcardsContainer}>
        {/* Project Card - 1 */}
      <div className={styles.projectCard}>
        <a href="#"><img className={styles.projectThumbnail} src={viberr} alt="Thumbnail" /></a>
        <div className={styles.projectDetails}>
          <div className={styles.detailesText}>
            <a href="#"><h2>Project Name</h2></a>
            <p>Desctiption</p>
          </div>
          <a href="#"><img className={styles.sourceLink} src={githubIcon} alt="Source Code" /></a>
        </div>
      </div>

{/* Project Card - 2 */}
<div className={styles.projectCard}>
        <a href="#"><img src={viberr} alt="Thumbnail" /></a>
        <div className={styles.projectDetails}>
          <div className={styles.detailesText}>
            <a href="#"><h2>Project Name</h2></a>
            <p>Desctiption</p>
          </div>
          <a href="#"><img className={styles.sourceLink} src={githubIcon} alt="Source Code" /></a>
        </div>
      </div>      

{/* Project Card - 3*/}
<div className={styles.projectCard}>
        <a href="#"><img src={viberr} alt="Thumbnail" /></a>
        <div className={styles.projectDetails}>
          <div className={styles.detailesText}>
            <a href="#"><h2>Project Name</h2></a>
            <p>Desctiption</p>
          </div>
          <a href="#"><img className={styles.sourceLink} src={githubIcon} alt="Source Code" /></a>
        </div>
      </div>    

{/* Project Card - 4 */}
<div className={styles.projectCard}>
        <a href="#"><img src={viberr} alt="Thumbnail" /></a>
        <div className={styles.projectDetails}>
          <div className={styles.detailesText}>
            <a href="#"><h2>Project Name</h2></a>
            <p>Desctiption</p>
          </div>
          <a href="#"><img className={styles.sourceLink} src={githubIcon} alt="Source Code" /></a>
        </div>
      </div>
      </div>


    </section>
  );
}

export default Projects;



  
      {/* <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div> */}