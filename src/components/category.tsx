import { Home } from 'react-iconly';

const Category = () => {
  return (
    <nav className='flex h-screen w-max px-4 py-3 border-r border-gray-200'>
      <img src={'https://avatars.githubusercontent.com/u/45326612?v=4'} className='rounded-xl border border-gray-200 ring-2 ring-gray-50 m-0.5 h-11 w-11' />
      <div className='flex'>
        <Home />
      </div>
    </nav>
  );
};

export default Category;
