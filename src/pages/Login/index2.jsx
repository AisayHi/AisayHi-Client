import useLoginForm from '../../hooks/useLoginForm';
import { useNavigate } from 'react-router-dom';
import LoginImg from './assets/login.svg';

export default function LoginPage2() {

  const navigate = useNavigate();
  const { loginId, userPwd, loginError, setLoginId, setUserpwd, handleLogin } = useLoginForm(); // useLoginForm 훅 사용

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleLogin(); // 로그인 처리 함수 호출

    if (result) {
      // 로그인 성공 시 알림을 띄우고 메인 페이지로 이동
      alert('로그인 성공');
      navigate('/'); // 메인 페이지로 이동
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[1024px]">

      {/* 로그인 폼 */}
      <div className="flex w-[1024px] h-full border border-green-500">
        <div className="w-1/2 h-full border border-green-500">
          <div className="border border-blue-500">
            <div className="mt-[104px] w-[512px] h-[112px] border border-red-500">
              <span className="block text-[44px]">로그인</span>
              <span className="block mt-[16px]">등록한 계정으로 로그인하세요</span>
            </div>

            {/* 아이디 입력 폼 */}
            <div className="relative w-full mt-4">
              <form noValidate onSubmit={handleSubmit} className="flex flex-col items-center w-full">
              <div className="relative w-full mt-4">
                {/* 입력 필드 보더에 텍스트 삽입 */}
                <span className="absolute -top-3 left-4 px-2 bg-white text-gray-500 text-sm">아이디</span>
                <div className="w-full mb-4">
                <input
                    type="text"
                    name="login_id"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder=" "
                    className="h-[50px] w-full border border-[#3B6EF1] rounded-[13px] focus:outline-none px-3"
                    required
                />
                </div>
            </div>



                <div className="w-full">
                  <input
                    type="password"
                    name="userpwd"
                    value={userPwd}
                    onChange={(e) => setUserpwd(e.target.value)}
                    placeholder="비밀번호 입력"
                    className="h-[50px] w-full border border-[#3B6EF1] rounded-b-[13px] focus:outline-none px-3"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-[50px] h-[50px] w-full rounded-[13px] bg-[#3B6EF1] text-white hover:bg-blue-600 focus:outline-none"
                >
                  로그인
                </button>

                {loginError && <p className="text-red-500 mt-4">{loginError}</p>}
              </form>
            </div>
          </div>
        </div>

        {/* 로그인 이미지 */}
        <div className="w-1/2 h-full border border-green-500 mt-[104px]">
          <img src={LoginImg} alt="Login Img" className="w-[377px] h-[495px]" />
        </div>
      </div>
    </div>
  );
}
