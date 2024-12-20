import HeadingSecondary from '@/components/titles';
import PrimaryButton from '@/components/buttons/Primary';
import Image from 'next/image';
import React, { ReactNode } from 'react';

export const TwoColumnsContent = ({ children, imageDisplay }: { children: ReactNode, imageDisplay: string }) => {
  return (
    <div className={`my-10 md:flex md:items-center ${imageDisplay === 'left' && 'md:flex-row-reverse'}`}>
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
    <div className="mb-5">{children}</div>
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
  return <PrimaryButton onClick={onClick}
                        SxProps={{ marginY: '10px' }}>Find my
    plant</PrimaryButton>;
};

type TwoColumnsProps = {
  title: string,
  description: string,
  Cta?: ReactNode,
  src: string,
  alt: string,
  imageDisplay: 'right' | 'left'
}

export const TwoColumns: React.FC<TwoColumnsProps> = ({
                                                        title,
                                                        description,
                                                        Cta,
                                                        src,
                                                        alt,
                                                        imageDisplay = 'left'
                                                      }: TwoColumnsProps) => {
  return (
    <TwoColumnsContent imageDisplay={imageDisplay}>
      <div className="md:w-1/2">
        <TwoColumnsContent.Title title={title} />
        <TwoColumnsContent.Description>{description}</TwoColumnsContent.Description>
        {Cta}
      </div>
      <TwoColumnsContent.Image src={src} alt={alt} />
    </TwoColumnsContent>
  );
};