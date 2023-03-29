import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Grandpa from "./Grandpa";
import Home from "./Home";
import OverReview from "./OverReview";


function App() {

  return (
    <>
      <div className="bg-gray-200 py-3">
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between'>
                <h1 className='text-2xl text-[#6e7b90] italic'>Shop</h1>
                <nav>
                    <NavLink
                        className='text-xl italic'
                        to="/"
                        style={({isActive}) => {
                            return {
                                color: isActive ? "#3b82f6" : "#6e7b90",
                            };
                        }}
                        >
                        Home
                    </NavLink>
                    <NavLink
                        to='/overreview'
                        className='text-xl italic pl-4'
                        style={({isActive})=>{
                            return {
                                color: isActive ? '#3b82f6' : '#6e7b90'
                            }
                        }}
                    >
                    Order Review
                    </NavLink>
                    <NavLink
                        to='/grandpa'
                        className='text-xl italic pl-4'
                        style={({isActive})=>{
                            return {
                                color: isActive ? '#3b82f6' : '#6e7b90'
                            }
                        }}
                    >
                    GrandPa
                    </NavLink>
                </nav>
            </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/overreview' element={<OverReview/>}/>
        <Route path='/grandpa' element={<Grandpa/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App
