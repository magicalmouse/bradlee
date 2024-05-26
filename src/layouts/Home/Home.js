import gamestackTexture2Large from 'assets/gamestack-list-large.png';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.png';
import gamestackTextureLarge from 'assets/gamestack-login-large.png';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.png';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import proSkill from 'assets/proskill.jpg';
import proSkillLarge from 'assets/proskill-large.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { Mention } from 'layouts/Home/Mention';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { Contact } from 'pages/contact/Contact';

const disciplines = ['Developer', 'Prototyper', 'Animator', 'Illustrator', 'Modder'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const slide = useRef();
  const contact = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details, slide];
    //const sections = [intro, projectOne, projectTwo, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer"
        description="Design portfolio of Bradlee Kimbrell — a senior web and app developer."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="about"
      />
      <ProjectSummary
        id="skill"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={1}
        title="Professional skills"
        description="A senior web developer combines technical expertise with creativity, problem-solving skills, and a passion for delivering high-quality web solutions."
        buttonText="View Skills"
        buttonLink="/projects/slice#skilldetail"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [proSkill, proSkillLarge],
              placeholder: proSkill,
            },
          ],
        }}
      />
      <ProjectSummary
        id="service"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={2}
        title="My Services"
        description="What I can do is.."
        buttonText="View Services"
        buttonLink="/projects/slice#servicedetail"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [proSkill, proSkillLarge],
              placeholder: proSkill,
            },
          ],
        }}
      />
      <ProjectSummary
        id="work"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={3}
        title="Web Developer Extraordinaire"
        description="Unleash your creativity and technical prowess as you learn the fundamentals of HTML, CSS, and JavaScript, laying the foundation for crafting visually stunning and interactive websites.Designing a platform to help educators build better online courseware"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="work-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={4}
        title="The Art of App Development"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="/projects/volkihar-knight"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Mention
        sectionRef={slide}
        id="testimonial"
        index={5}
        title="Testimonial"
        description="They say about me"
      />

      <Contact sectionRef={contact} id="contact"></Contact>
      <Footer />
    </div>
  );
};
