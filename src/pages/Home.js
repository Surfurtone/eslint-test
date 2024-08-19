import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import testImage from '../assets/imgs/testImage.png'

const Home = () => {
  const navigate = useNavigate()

  const selectCharacterGenderPageA = async (gender) => {
    // 선택된 성별 문자열을 PageA로 전달
    navigate('/PageA', { state: { gender: gender } })
  }

  const selectCharacterGenderPageC = async (gender) => {
    // 선택된 성별 문자열을 PageC로 전달
    navigate('/PageC', { state: { gender: gender } })
  }

  return (
    <div className="flex min-h-screen justify-center relative">
      <Sidebar />

      {/* 메인 컨텐츠 */}
      <div className="w-full max-w-[400px] overflow-x-hidden bg-gray-300 ">
        <div className="px-[24px] py-[40px] flex flex-col gap-4 justify-between bg-slate-400">
          여기는 Home 페이지
          <div className="grid grid-cols-1 gap-4">
            <img src={testImage} alt="testImage" />
            <button
              className="bg-blue-300"
              onClick={() => selectCharacterGenderPageA('female')}
            >
              여자 캐릭터 선택 - pageA
            </button>
            <button
              className="bg-blue-100"
              onClick={() => selectCharacterGenderPageA('male')}
            >
              남자 캐릭터 선택 - pageA
            </button>
            <button
              className="bg-pink-300"
              onClick={() => selectCharacterGenderPageC('female')}
            >
              여자 캐릭터 선택(카드 컴포넌트 적용) - PageC
            </button>
            <button
              className="bg-pink-100"
              onClick={() => selectCharacterGenderPageC('male')}
            >
              남자 캐릭터 선택(카드 컴포넌트 적용) - PageC
            </button>
            <Link to="/page1" className="bg-yellow-300">
              Page1로 이동
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
