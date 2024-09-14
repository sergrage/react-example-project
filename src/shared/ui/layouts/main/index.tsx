import { Outlet } from 'react-router-dom'
import { Header } from '@/shared/ui/layouts/main/Header.tsx'
import { ErrorToast } from '@/shared/ui/ErrorToast'
import LoginForm from './LoginForm'
import { observer } from 'mobx-react-lite'

import {store} from "@/app/auth/model";

const MainLayout = observer (() => {
  const isAunteficated = store.isAunteficated
  
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-2 mt-2">
          
           {isAunteficated ? 
            <span>Вы зашли как : {store.user.email}</span>
            : (<LoginForm />)}
        </div>
        <div className="col-10 mt-2">
          <Outlet />
        </div>
      </div>
      <ErrorToast message="Test message" show={true} />
    </div>
  )
}
)

export default MainLayout
