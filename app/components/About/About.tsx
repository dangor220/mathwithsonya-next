'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import React from 'react';

import styles from './About.module.scss';

import graduate from '@/public/images/about/graduate.webp';
import arrow from '@/public/images/about/arrow.webp';

import { DefaultContent } from '@/types/defaultContentTypes';
import useHandleScrollbar from '@/hooks/useHandleScrollbar';

import { LazyMotion, domAnimation } from 'motion/react';
import * as m from 'motion/react-m';

const LightboxWithZoom = dynamic(() => import('@/components/LightboxWithZoom/LightboxWithZoom'), {
  ssr: false,
});

type Props = {
  content: DefaultContent;
  headerRef: React.RefObject<HTMLElement | null>;
  scrollDirection: string;
};

export default function About({ content, headerRef, scrollDirection }: Props): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const slides = [
    {
      src: '/images/about/diplom/page_1.webp',
      width: 1755,
      height: 1240,
      alt: 'Диплом бакалавра. Страница 1.',
    },
    {
      src: '/images/about/diplom/page_2.webp',
      width: 1755,
      height: 1240,
      alt: 'Диплом бакалавра. Страница 2-3.',
    },
    {
      src: '/images/about/diplom/page_3.webp',
      width: 1755,
      height: 1240,
      alt: 'Диплом бакалавра. Страница 4.',
    },
  ];

  useHandleScrollbar(headerRef, open);

  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.wrapper}`}>
        <LazyMotion features={domAnimation}>
          <m.h2
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
            viewport={{ amount: 0.3 }}
            className={styles.title}>
            {content.about.title}
          </m.h2>
        </LazyMotion>

        <div className={styles.content}>
          <LazyMotion features={domAnimation}>
            <m.div
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
              className={styles.text}>
              {content.about.text}
            </m.div>
            <m.div
              initial={{ opacity: 0, y: scrollDirection === 'down' ? -200 : 200 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  bounce: 0.4,
                  duration: 1,
                  delay: 0.3,
                },
              }}
              className={styles.graduate}>
              <Image
                src={graduate}
                className={styles.image}
                loading="lazy"
                alt="Софья с красным дипломом"
              />

              <m.div
                animate={{ y: [-32, 0, -32], rotate: [3, 0, 3] }}
                transition={{
                  duration: 3,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
                className={styles.click}>
                <Image
                  src={arrow}
                  loading="lazy"
                  alt="Нажми на диплом"
                  fill
                  sizes="100dw"
                  quality={50}
                />
              </m.div>

              <button
                className={styles.button}
                aria-label="Открыть диплом"
                type="button"
                onClick={() => setOpen(true)}></button>
            </m.div>
          </LazyMotion>
        </div>
      </div>
      <LightboxWithZoom slides={slides} open={open} setOpen={setOpen} />
    </section>
  );
}
