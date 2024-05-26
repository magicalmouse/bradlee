import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';
import { Icon } from 'components/Icon';
import { socialLinks } from '../../components/Navbar/navData';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span
        className={styles.date}
      >{`© ${new Date().getFullYear()} Bradlee Kimbrell.`}</span>
      <Link
        secondary
        className={styles.link}
        href="https://mailto:Bradlee@magehire.com/"
        target="_blank"
      >
        MageHire
      </Link>
    </Text>
  </footer>
);
