import imageSlide1 from 'assets/slide1.png';
import imageSlide2 from 'assets/slide2.png';
import imageSlide3 from 'assets/slide3.png';
import imageSlide4 from 'assets/slide4.png';
import imageSlide5 from 'assets/slide5.png';
import imageSlide6 from 'assets/slide6.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));

const title = 'My Works';
const description =
  'With a fair understanding of modern day requirements of individuals, we have been successful in providing our clients with the desired solutions and receiving applause in return.';
const roles = ['3D Modelling', 'Texturing', 'Graphic Design'];

export function VolkiharKnight() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[imageSlide4, imageSlide4]}
          placeholder={imageSlide4}
          opacity={0.5}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={imageSlide5}
              images={[
                {
                  srcSet: [imageSlide5, imageSlide5],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wearing the black coloured armor set.',
                },
                {
                  srcSet: [imageSlide1, imageSlide1],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A close up of the custom gauntlets design.',
                },
                {
                  srcSet: [imageSlide6, imageSlide6],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wielding a sword and wearing the red coloured armor.',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[imageSlide3, imageSlide3]}
              placeholder={imageSlide3}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={[imageSlide2, imageSlide2]}
                placeholder={imageSlide2}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>Android Development</ProjectSectionHeading>
              <ProjectSectionText>
                I’m an Android Developer, passionate about building great apps. For me app
                development is not just about coding, it’s also about creating an awesome
                user experience. So far, I have worked on almost 8+ apps. Most of these
                apps were developed while I was working at a day job. In my portfolio, I
                am only showcasing apps that I have personally designed and developed.
                Note: If you want to know the cost of building an mobile app, my contact
                info is listed at the bottom. I specialize in building high quality and
                cost effective Android apps. Keep reading to see some of my existing apps.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
