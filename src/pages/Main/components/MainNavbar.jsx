import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import MainSearchBar from './MainSearchBar';
import MainMenu from './MainMenu';
import useAuthStore from '../../../store/useAuthStore';
import '../../../index.css';

export default function MainNavbar() {
  const { isAuthenticated, username, logout } = useAuthStore();

  console.log('isAuthenticated:', isAuthenticated); // 로그인 여부 확인
  console.log('username:', username); // 사용자 이름 확인

  return (
    <nav className="bg-[#3B6EF1] flex flex-col items-center text-white h-[170px]">
      <div className="container h-full">
        {/* 첫 번째 줄: 로고 및 로그인/회원가입 */}
        <div className="flex items-center justify-between h-[85px] ml-16 mr-16 mb-0">
          {/* 로고 */}
          <div className="flex items-center">
            <Link to="/" aria-label="Main">
              <img src={Logo} alt="The Porter Marker Logo" className="h-[45px]" />
            </Link>
          </div>

          {/* 로그인/회원가입 또는 사용자 정보 및 로그아웃 */}
          <div className="flex items-center text-[20px] space-x-4">
            {isAuthenticated ? (
              // 로그인된 상태
              <>
                <span>{username}님, 환영합니다!</span>
                <button
                  onClick={logout}
                  className="text-white hover:text-gray-200 no-underline"
                  aria-label="Logout"
                >
                  로그아웃
                </button>
              </>
            ) : (
              // 로그인이 안된 상태
              <>
                <Link to="/LoginPage" className="text-white hover:text-gray-200 no-underline" aria-label="Login">
                  로그인
                </Link>
                <Link to="/SignUpPage" className="text-white hover:text-gray-200 no-underline mr-2" aria-label="Sign Up">
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>


        {/* 두 번째 줄: 텍스트, 네비게이션 메뉴 및 검색바 */}
        <div className="flex items-start justify-between text-[18px] h-[85px] ml-16 mr-16 mt-0 mb-0">

          {/* 로고 텍스트 */}
          <div className="flex items-start space-x-4 h-full px-0 py-0">
            <span className="font-bold text-[24px]">
              <Link to="/" className="text-white hover:text-gray-200 no-underline" aria-label="Main">
                THE PORTER MARKET
              </Link>
              </span>

            {/* 네비게이션 메뉴 */}
            <MainMenu />
          </div>

          {/* 검색바 */}
          <MainSearchBar />
        </div>
      </div>
    </nav>
  );
}
