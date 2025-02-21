import HeadingSecondary from '@/components/titles';
import PrimaryButton from '@/components/buttons/Primary';
import Image from 'next/image';
import React, { ReactNode } from 'react';

export const TwoColumnsContent = ({ children, imageDisplay, className }: {
  children: ReactNode,
  imageDisplay: string,
  className?: string
}) => {
  return (
    <div className={`md:flex md:items-center ${imageDisplay === 'left' && 'md:flex-row-reverse'} ${className}`}>
      {children}
    </div>
  );
};

TwoColumnsContent.Title = function TwoColumnsTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <HeadingSecondary className="">{title}</HeadingSecondary>
    </div>);
};

TwoColumnsContent.Description = function TwoColumnsDescription({ children }: { children: string }) {
  return (
    <div className="mb-5 text-justify">{children}</div>
  );
};

TwoColumnsContent.Image = function TwoColumnsImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="md:w-1/2">
      <Image className="mx-auto" src={src} alt={alt} width={640}
             height={848} />
    </div>
  );
};

TwoColumnsContent.Button = function TwoColumnsButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-full flex justify-center">
      <PrimaryButton onClick={onClick}
                     SxProps={{ marginY: '10px', width: '50%' }}>Find my
        plant</PrimaryButton>
    </div>
  );
};

type TwoColumnsProps = {
  title: string,
  description: string,
  Cta?: ReactNode,
  src: string,
  alt: string,
  className?: string,
  imageDisplay: 'right' | 'left'
}

export const TwoColumns: React.FC<TwoColumnsProps> = ({
                                                        title,
                                                        description,
                                                        Cta,
                                                        src,
                                                        alt,
                                                        className,
                                                        imageDisplay = 'left'
                                                      }: TwoColumnsProps) => {
  return (
    <TwoColumnsContent className={className} imageDisplay={imageDisplay}>
      <div className="md:w-1/2 mx-5 md:mx-10 lg:mx-20 2xl:mx-52">
        <TwoColumnsContent.Title title={title} />
        <TwoColumnsContent.Description>{description}</TwoColumnsContent.Description>
        {Cta}
      </div>
      <TwoColumnsContent.Image src={src} alt={alt} />
    </TwoColumnsContent>
  );
};