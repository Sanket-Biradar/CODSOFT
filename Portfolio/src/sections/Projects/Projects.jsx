import styles from './ProjectsStyles.module.css';
import viberr from 'C:/Users/Acer/OneDrive/Desktop/Portfolio/Portfolio/src/assets/home.jpeg';
import freshBurger from 'C:/Users/Acer/OneDrive/Desktop/Portfolio/Portfolio/src/assets/blog.jpeg';
import hipsster from 'C:/Users/Acer/OneDrive/Desktop/Portfolio/Portfolio/src/assets/Chrun.jpeg';
import fitLift from '../../assets/Online.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Sanket-Biradar/Home-Rentals"
          h3="Home Heaven"
         
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Sanket-Biradar/BLog_Platform"
          h3="Blog Platform"
         
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Sanket-Biradar/Churn-Prediction"
          h3="Churn Prediction"
         
        />
        
      </div>
    </section>
  );
}

export default Projects;
