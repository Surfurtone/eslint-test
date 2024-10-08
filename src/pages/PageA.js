import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import LoadingSpinner from '../components/LoadingSpinner' // 로딩 스피너 컴포넌트 임포트

const PageA = () => {
  const baseUrl = process.env.REACT_APP_API_URL
  const [error, setError] = useState(null)
  const [characters, setCharacters] = useState([]) // 캐릭터 리스트
  const [character, setCharacter] = useState({}) // 한 명의 캐릭터 정보
  const [currentIndex, setCurrentIndex] = useState(0) // 현재 캐릭터 인덱스
  const [loading, setLoading] = useState(true) // 로딩 상태 추가
  const location = useLocation()
  const navigate = useNavigate()
  const gender = location.state?.gender // 전달된 gender 값

  useEffect(() => {
    // 0.5초 동안 로딩 화면을 표시한 후 캐릭터 데이터를 불러옴
    console.log(baseUrl)
    const timer = setTimeout(() => {
      setLoading(false)
      fetchCharacters()
    }, 500)

    return () => clearTimeout(timer) // 컴포넌트가 언마운트될 때 타이머를 정리
  }, [gender])

  const fetchCharacters = async () => {
    try {
      let response
      if (gender === 'female') {
        // 여자 캐릭터 정보 불러오기
        response = await axios.post(
          `${baseUrl}/api/webtoon/female/`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': '69420',
              Accept: 'application/json',
            },
          },
        )
      } else if (gender === 'male') {
        // 남자 캐릭터 정보 불러오기
        response = await axios.post(
          `${baseUrl}/api/webtoon/male/`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': '69420',
              Accept: 'application/json',
            },
          },
        )
      }

      if (response && response.data.length > 0) {
        setCharacters(response.data) // 캐릭터 리스트 저장
        setCharacter({
          name: response.data[0].character.name,
          age: response.data[0].character.age,
          tags: response.data[0].character.tags,
        })
      }
    } catch (error) {
      console.error('Error fetching data:', error.message)
      console.log(error.message)
      setError(error.message)
    }
  }

  const handleChangeCharacter = () => {
    if (currentIndex < characters.length - 1) {
      // 다음 캐릭터로 인덱스를 증가시킴
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      setCharacter({
        name: characters[newIndex].character.name,
        age: characters[newIndex].character.age,
        tags: characters[newIndex].character.tags,
      })
    } else {
      // 마지막 캐릭터라면 PageB로 이동
      navigate('/PageB')
    }
  }

  if (loading) {
    return <LoadingSpinner /> // 로딩 중일 때 로딩 스피너를 표시
  }

  return (
    <div>
      <div>여기는 PageA</div>
      <div className="bg-slate-200">
        <div>컴포넌트 내용이 바뀌는 div 영역</div>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <div>캐릭터 이름: {character.name}</div>
            <div>캐릭터 나이: {character.age}</div>
            <div>캐릭터 태그: {character.tags}</div>
          </>
        )}
        <button className="bg-orange-200" onClick={handleChangeCharacter}>
          내용 바꾸기
        </button>
      </div>
      <Link to="/PageB" className="bg-blue-200">
        PageB로 이동
      </Link>
    </div>
  )
}

export default PageA
