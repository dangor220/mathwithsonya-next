import React from 'react';

import styles from './Contacts.module.scss';
import { DefaultContent } from '@/types/defaultContentTypes';
import YandexMap from '../YandexMap/YandexMap';
import ContactsForm from '../ContactsForm/ContactsForm';

import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'motion/react';

export default function Contacts({
  content,
  scrollDirection,
}: {
  content: DefaultContent;
  scrollDirection: string;
}): React.ReactElement {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={`container ${styles.wrapper}`}>
        <motion.h2
          initial={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1,
            },
          }}
          className={styles.title}>
          {content.contacts.title}
        </motion.h2>
        <motion.div
          initial={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1,
            },
          }}>
          <ContactsForm content={content} />
        </motion.div>
        <motion.div
          initial={scrollDirection === 'down' ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1,
            },
          }}
          className={styles.content}>
          <div className={styles.help}>{content.contacts.help}</div>
          <div className={styles.contact}>
            <YandexMap />{' '}
            <nav className={styles.nav}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a
                    className={styles.link}
                    href={content.contacts.telegram}
                    target="_blank"
                    title={content.contacts.telegram}>
                    <TelegramIcon />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href={`tel:${content.contacts.phone}`}
                    title={content.contacts.phone}>
                    <CallIcon />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href={`mailto:${content.contacts.mail}`}
                    target="_blank"
                    title={content.contacts.mail}>
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
