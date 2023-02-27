import React, { MouseEventHandler, PropsWithChildren, useCallback } from 'react';

import { Background } from './ModalBackground.styled';

export interface ModalBackgroundProps extends PropsWithChildren {
  className?: string;
  verticalAlign?: 'start' | 'center' | 'end';
  onBackgroundClick?: MouseEventHandler;
}

export function ModalBackground({
  verticalAlign = 'end',
  className,
  onBackgroundClick,
  children,
}: ModalBackgroundProps) {
  const handleBackgroundClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      if (onBackgroundClick) {
        onBackgroundClick(e);
      }
    },
    [onBackgroundClick]
  );

  return (
    <Background className={className} verticalAlign={verticalAlign} onClick={handleBackgroundClick}>
      {children}
    </Background>
  );
}