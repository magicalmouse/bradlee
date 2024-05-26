import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageDentist from 'assets/dentist.png';
import imageSkill from 'assets/skills.png';
import imageService from 'assets/service.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'What I work with My Skills';
const description =
  'A senior web developer combines technical expertise with creativity, problem-solving skills, and a passion for delivering high-quality web solutions.';
const roles = [
  // 'Blockchain Development',
  // 'Web Development',
  // 'App Development',
  // 'UI/UX Design',
];
const title1 = 'What Can I serve';
const description1 = '';
const roles1 = [
  // 'Blockchain Development',
  // 'Web Development',
  // 'App Development',
  // 'UI/UX Design',
];

// const skills = [{ label: 'TypeScript', image: [tsImage, tsImage] }];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={backgroundSprLarge}
          srcSet={`${backgroundSprLarge.src} 1280w, ${backgroundSprLarge.src} 2560w`}
          placeholder={backgroundSprLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          id={'skilldetail'}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            {/* {skills.map(({ label, image }, index) => (
              <div key={index} className="skillCard">
                <ProjectImage
                  srcSet={[image, image]}
                  placeholder={backgroundSpr}
                  alt="The Slice web application showing a selected user annotation."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                />
                <div className="skillDesc">{label}</div>
              </div>
            ))} */}
            <ProjectImage
              srcSet={[imageSkill, imageSkill]}
              placeholder={backgroundSpr}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectHeader
          title={title1}
          description={description1}
          roles={roles1}
          id={'servicedetail'}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            {/* {skills.map(({ label, image }, index) => (
              <div key={index} className="skillCard">
                <ProjectImage
                  srcSet={[image, image]}
                  placeholder={backgroundSpr}
                  alt="The Slice web application showing a selected user annotation."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                />
                <div className="skillDesc">{label}</div>
              </div>
            ))} */}
            <ProjectImage
              srcSet={[imageService, imageService]}
              placeholder={backgroundSpr}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                Beautiful and perfect websites
              </ProjectSectionHeading>
              <ProjectSectionText>
                Providing you with eCommerce websites, customized mobile apps, data
                organization, cloud solutions and much more. Fulfilling your business`s
                software needs, regardless of its size. Development of software for
                industry specific products for non-profit organizations, HR, eCommerce,
                healthcare industry, etc.
              </ProjectSectionText>
              <ProjectSectionText>
                Designing Cutting edge software with the ability to accommodate more than
                10,000 users. 95% of the products we`ve developed for startup businesses
                are functioning successfully and reaching revenue goals.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[imageSprLessonBuilderDark, imageSprLessonBuilderDark]}
                placeholder={imageSprLessonBuilderDark}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[imageDentist, imageDentist]}
                placeholder={imageDentist}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
