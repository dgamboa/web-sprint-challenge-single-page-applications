import * as yup from 'yup';
import { string } from 'yup/lib/locale';

export default yup.object().shape({
  name: yup
    .string()
    .required('Must include your name')
    .min(2, 'Name needs to be at least 3 characters long'),
  size: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large'], 'Must select a pizza size')
})