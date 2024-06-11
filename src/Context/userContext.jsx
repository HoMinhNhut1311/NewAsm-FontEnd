import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [user,setUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    )


    useEffect(() => {
            setUser(sessionStorage.getItem('user'))
    },[user])

    
    const login = (userData) => {
        setUser(userData)
           sessionStorage.setItem('user',JSON.stringify(userData))
    }

    const logout = async  () =>{
        await Swal.fire({
            title : 'Đăng xuất thành công',
            text : `Tự động chuyển sang trang Đăng Nhập sau 2 giây nữa`,
            timer : 2000,
            timerProgressBar : true,
            background : '#36d7b7', 
            color : 'white',
            icon : 'info'
        }).then(
            // () => {
            //     navi("/login")
            // }
        )
        sessionStorage.removeItem('user')
        setUser(null)
    }

    return (
    <UserContext.Provider value={{ user, login, logout}}>
            {children}
    </UserContext.Provider>
    )
}

export default UserContext;