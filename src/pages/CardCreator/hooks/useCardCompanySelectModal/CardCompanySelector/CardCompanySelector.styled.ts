import { styled } from '@/stitches.config';

export const Wrapper = styled('div', {
  width: '100%',
  height: '30%',
  maxHeight: '30%',
  backgroundColor: 'White',
});

export const CompaniesWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  rowGap: '15px',
  flexWrap: 'wrap',
  padding: '30px',
});