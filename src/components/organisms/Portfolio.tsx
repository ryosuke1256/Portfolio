import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { IPortfoliosFields } from '../../../@types/generated/contentful';
import clsx from 'clsx';
import Arrow from '/public/images/arrow_up_right.svg';

const img = {
  height: 150,
  width: 150,
};

const imageClass = 'w-full max-w-sm text-center rounded-3xl bg-white p-2 relative md:self-center';

type PortfolioProps = {
  portfolio: Entry<IPortfoliosFields>;
};

export const Portfolio: FC<PortfolioProps> = ({ portfolio }: PortfolioProps) => {
  const [isShowArorw, setIsShowArrow] = useState<boolean>(false);
  const { title, link, image, alt, explain, technology } = portfolio.fields;
  const url = image.fields.file.url;

  return (
    <>
      <div className='pb-12 flex flex-col items-center md:w-1/2 md:pr-10 md:even:pr-0 md:even:pl-10 md:items-start'>
        {typeof link === 'string' ? (
          <Link href={link}>
            <a
              target='_blank'
              onMouseOver={() => setIsShowArrow(true)}
              onMouseLeave={() => setIsShowArrow(false)}
              rel='noopener noreferrer'
              className={clsx(imageClass, 'hover:scale-105 hover:shadow-md cursor-pointer')}
            >
              <Image src={`https:${url}`} alt={alt} layout='intrinsic' height={img.height} width={img.width} />
              {isShowArorw && <Arrow className='absolute top-2 right-2' fill='#d9d9d9' height={24} width={24} />}
            </a>
          </Link>
        ) : (
          <p className={imageClass}>
            <Image src={`https:${url}`} alt={alt} layout='intrinsic' height={img.height} width={img.width} />
          </p>
        )}
        <h2 className='text-xl font-semibold pt-6'>{title}</h2>
        <div className='max-w-sm text-center pt-6 pb-3 md:text-left md:max-w-none'>{documentToReactComponents(explain)}</div>
        <p className='text-center mb:text-left'>{technology}</p>
      </div>
    </>
  );
};
