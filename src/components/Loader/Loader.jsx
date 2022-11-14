import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <ThreeDots
    height="200"
    width="200"
    radius="9"
    color="#3f51b5"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
    }}
    wrapperClassName=""
    visible={true}
  />
);

export default Loader;
