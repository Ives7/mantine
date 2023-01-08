import { createStyles, rem } from '@mantine/styles';

export default createStyles((theme, _params, { size }) => ({
  error: {
    wordBreak: 'break-word',
    color: theme.fn.variant({ variant: 'filled', color: 'red' }).background,
    fontSize: `calc(${theme.fn.size({ size, sizes: theme.fontSizes })} - ${rem(2)})`,
    lineHeight: 1.2,
    display: 'block',
  },
}));
