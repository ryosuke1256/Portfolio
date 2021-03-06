import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import clsx from 'clsx';
import Typed from 'react-typed';

const section = {
  title: 'text-2xl font-semibold',
  paragraph: 'py-4',
};

export const About: FC = () => {
  return (
    <>
      <div className='h-auto xsm:h-24 md:h-28'>
        <Typed
          className='whitespace-pre-wrap text-2.5xl tracking-wider font-semibold leading-relaxed md:text-4xl md:leading-relaxed md:font-bold'
          strings={[`Hi! I'm Ryosukeð,\nA software developer.`]}
          typeSpeed={45}
        />
      </div>
      <h1 className={clsx(section.title, 'pt-14')}>About</h1>
      <p className={section.paragraph}>
        æ±äº¬ã§ã¨ã³ã¸ãã¢ããã¦ããRyosukeã§ããå¤§å­¦ã®é»æ°é»å­å·¥å­¦ç§åæ¥­å¾ãï¼å¹´åã»ã©ãã¼ããçµé¨ãã
        <br />
        ãã®å¾å°äººæ°ã®åè¨ä¼ç¤¾ã«å°±è·ããã«ã¹ã¿ãã¯ãªéçºãçµé¨ãã¾ããã
        <br />
        è¶£å³ã¯æ´æ¥½ãEDMãªã©ã®é³æ¥½ãèããã¨ãç­ãã¬ã¨ãµã¦ããå¥½ãã§ãã
        <br />
        å°æ¥ã¯ããããªäººã«ä½¿ããããµã¼ãã¹ãä½ã£ã¦ã¿ããã
      </p>
      <h1 className={clsx(section.title, 'pt-12')}>Contact</h1>
      <div className={clsx('flex flex-row justify-between w-full max-w-sm', section.paragraph)}>
        {images.map((image, index: number) => (
          <Link key={index} href={image.href}>
            <a target={image.target} rel={image.rel} className={'hover:scale-110'}>
              <Image src={image.src} alt={image.alt} height={32} width={32} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

const images = [
  {
    href: 'mailto:engineerxx1245.gmail.com',
    target: '_self',
    rel: '',
    src: '/images/gmail.svg',
    alt: 'Gmail',
  },
  {
    href: 'https://github.com/ryosuke1256',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/github.png',
    alt: 'GitHub',
  },
  {
    href: 'https://zenn.dev/reactlover',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/zenn.svg',
    alt: 'Zenn',
  },
  {
    href: 'https://qiita.com/e8750520',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/qiita.png',
    alt: 'Qiita',
  },
] as const;
