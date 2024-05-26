import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-large.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageFoodShop from 'assets/shopify.png';
import imageFoodShopLarge from 'assets/shopify-large.png';
import imageDentist from 'assets/dentist.png';
import imageDentistLarge from 'assets/dentist-large.png';
import imageWeblyStudio from 'assets/weblystudio.png';
import imageWeblyStudioLarge from 'assets/weblystudio-large.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-dark-large.jpg';
import imagePhysio from 'assets/physio.png';
import imagePhysioLarge from 'assets/physio-large.png';
import imageK2Food from 'assets/FoodShop.png';
import imageK2FoodLarge from 'assets/FoodShop-large.png';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Family Traveller';
const description =
  'Our goal is to help you choose a holiday that your family will enjoy, whether you are travelling with toddlers or teenagers, babies or grandparents. The difference between us and other travel sites is that we are tailor made for you.';
const roles = ['Front End Development', 'PHP, WordPress, CSS'];
const url = 'https://familytraveller.com/';

const title1 = 'FoodOnline';
const description1 =
  'An online food ordering system allows your business to accept and manage orders placed online for delivery or takeaway. Customers browse a digital menu, either on an app or website and place and pay for their order online.';
const roles1 = ['Front End Development', 'React.js, Node.js, TailwindCSS', 'AWS'];
const url1 = 'https://food2-iota.vercel.app/';

const title2 = 'Dentist';
const description2 =
  'Glee Dentistry specialize in many forms of dentistry. From cosmetic dentistry to restorative surgeries and emergencies.';
const roles2 = ['Front End Development', 'Angular, Material Ui, TailwindCSS, AWS'];
const url2 = 'https://gleedentistry.com/';

const title3 = 'Webly Studio';
const description3 =
  'We are a multidisciplinary creative studio. We work together to design, create and produce work that we are proud of for folks that we believe in.';
const roles3 = ['Front End Development', 'React.js, Node.js, TailwindCSS'];
const url3 = 'https://weblystudio.com/';

const title4 = 'Know Your Physio';
const description4 =
  'At Know Your Physio, we believe in unparalleled authenticity, and that discovering your science is the ultimate way to optimize your life.';
const roles4 = ['Full Stack Development', 'React', 'SpringBoot', 'PostgreSQL'];
const url4 = 'https://knowyourphysio.org/';

const title5 = 'K2 Foods';
const description5 =
  'We have been serving the freshest nuts, seeds, dried fruit, and snacks online across the country. We take pride in serving both big and small customers.';
const roles5 = ['Full Stack Development', 'ASP .NET Core, BootStrap, Razar, MSQL'];
const url5 = 'https://k2foods.pk/';

const jsonArray = [
  {
    id: 0,
    title: title,
    description: description,
    roles: roles,
    url: url,
    image: imageSprLessonBuilderDark,
    imageLarge: imageSprLessonBuilderDarkLarge,
  },
  {
    id: 1,
    title: title1,
    description: description1,
    roles: roles1,
    url: url1,
    image: imageFoodShop,
    imageLarge: imageFoodShopLarge,
  },
  {
    id: 2,
    title: title2,
    description: description2,
    roles: roles2,
    url: url2,
    image: imageDentist,
    imageLarge: imageDentistLarge,
  },
  {
    id: 3,
    title: title3,
    description: description3,
    roles: roles3,
    url: url3,
    image: imageWeblyStudio,
    imageLarge: imageWeblyStudioLarge,
  },
  {
    id: 4,
    title: title4,
    description: description4,
    roles: roles4,
    url: url4,
    image: imagePhysio,
    imageLarge: imagePhysioLarge,
  },
  {
    id: 5,
    title: title5,
    description: description5,
    roles: roles5,
    url: url5,
    image: imageK2Food,
    imageLarge: imageK2FoodLarge,
  },
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        {jsonArray.map(item => (
          <div key={item.id}>
            <ProjectHeader
              title={item.title}
              description={item.description}
              url={item.url}
              roles={item.roles}
            />
            <ProjectSection padding="top">
              <ProjectSectionContent>
                <ProjectImage
                  raised
                  key={themeId}
                  srcSet={
                    isDark ? [item.image, item.imageLarge] : [item.image, item.imageLarge]
                  }
                  placeholder={
                    isDark
                      ? imageSprLessonBuilderDarkPlaceholder
                      : imageSprLessonBuilderLightPlaceholder
                  }
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                  alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
                />
              </ProjectSectionContent>
            </ProjectSection>
          </div>
        ))}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
