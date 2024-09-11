import styles from './ProjectsStyles.module.css';
import sdflix from '../../assets/sdflix.png';
import medical from '../../assets/medical.png';
import ppl from '../../assets/ppl.png';
import fitLift from '../../assets/hero-img.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={sdflix}
          link="https://github.com/Mujeeb-19/SDflix"
          h3="SD Flix"
          p="Streaming App like netflix for anime."
        />
        <ProjectCard
          src={medical}
          link="https://github.com/Mujeeb-19/MedicalInsuranceAnalysis"
          h3="Medical Insurance Coverage Analytics System"
          p="Analysis of medical data for insurance benefits and financial decisions."
        />
        <ProjectCard
          src={ppl}
          link="https://github.com/Mujeeb-19/PplTrackMultiCam"
          h3="Multi-Camera People Tracking System"
          p="Helps track people across various cameras by reidentifying them."
        />
       
      </div>
    </section>
  );
}

export default Projects;
