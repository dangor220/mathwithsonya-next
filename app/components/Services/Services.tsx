import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { DefaultContent } from '@/types/defaultContentTypes';

import Gallery from '../Gallery/Gallery';
import styles from './Services.module.scss';

export default function Services({
  content,
  headerRef,
  scrollDirection,
}: {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLDivElement | null>;
  scrollDirection: string;
}): React.ReactElement {
  const [activeTab, setActiveTab] = useState('myHome');
  const arrayOptions = Object.entries(content.services.options);

  const handleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.services} id="services">
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
          {content.services.title}
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
          }}
          className={styles.tabs}>
          {arrayOptions.map(([tab, obj]) => (
            <button
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => {
                handleTab(tab);
              }}
              key={obj.id}>
              {obj.type}
            </button>
          ))}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={styles.description}>
              <div className={styles.text}>
                <div className={styles.description}>
                  {content.services.options[activeTab].content.description}
                </div>
                <ul className={styles.list}>
                  {content.services.options[activeTab].content.features.map((item, index) => (
                    <li
                      key={`${content.services.options[activeTab].id}-${index}`}
                      className={styles.item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={styles.goal}>
                  {content.services.options[activeTab].content.goal}
                </div>
                <div className={styles.call_to_action}>
                  {content.services.options[activeTab].content.call_to_action}
                </div>
                <div className={styles.price}>
                  Стоимость занятия:{' '}
                  <span>{content.services.options[activeTab].content.price}</span> рублей за 60
                  минут
                  <div className={styles.discount}>
                    {content.services.options[activeTab].content.discount}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-images`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={styles.images}>
              <Gallery slides={content.services.options[activeTab].slides} headerRef={headerRef} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
