import profileImgLarge from 'assets/profile-large.png';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.png';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My name is Bradlee Kimbrell. I am a Full Stack Web Developer located in Bradenton,
      Florida. I`m highly passionate when it comes to learning all sorts of things. That`s
      what keeps me going in life.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I look at coding as a never-ending challenge, and I won`t slow down until I feel
      like I achieved a level of mastery. Then the real fun begins. Until that moment,
      it`s all about self-discipline, continuous learning, and tremendous patience. I, in
      one word: `DRIVEN`.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Experienced Web Developer adept in all stages of advanced web development.
      Knowledgeable in user interface, testing, and debugging processes. Bringing forth
      expertise in design, installation, testing and maintenance of web systems. Equipped
      with a diverse and promising skill-set. Proficient in an assortment of technologies,
      including .NET, Java, Ruby on Rails, Django, Laravel, React.js, Vue.js. Able to
      effectively self-manage during independent projects, as well as collaborate in a
      team setting. Authorized to work in the US for any employer
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
