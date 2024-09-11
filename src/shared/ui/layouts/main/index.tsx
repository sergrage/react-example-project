import { Outlet } from 'react-router-dom'
import { Header } from '@/shared/ui/layouts/main/Header.tsx';
import { ErrorToast } from '@/shared/ui/ErrorToast';

const MainLayout = () => {
  return (
    <div className="container position-relative">
      <div className="row">

        <div className="col-12">
          <Header />
        </div>
        <div className="col-2 mt-2">
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-10 mt-2">
          <Outlet />
        </div>
      </div>
      <ErrorToast message="Test message" show={true}/>
    </div>
  )
}

export default MainLayout
