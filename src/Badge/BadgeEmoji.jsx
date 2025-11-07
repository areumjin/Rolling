import React from 'react'

// TODO: 실제 API 연동 시 아래 URL을 백엔드 엔드포인트로 교체하세요.
const EMOJI_BADGE_API_URL = 'https://placeholder.example.com/api/emoji-badge'

/**
 * BadgeEmoji 컴포넌트 - 이모지 배지
 * @param {string} emoji - 표시할 이모지
 * @param {number} count - 표시할 숫자
 */
function BadgeEmoji({ emoji = '😍', count = 24, apiUrl = EMOJI_BADGE_API_URL }) {
  // apiUrl은 현재 더미 값이며, 추후 fetch(apiUrl) 등을 통해 데이터를 받아와 emoji/count를 갱신할 수 있습니다.

  return (
    <div
      className="inline-flex flex-row items-center gap-0.5 py-2 px-3 w-[66px] h-9 rounded-[32px]"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.54)' }}
    >
      <span className="w-5 h-5 text-base leading-5 text-black flex items-center justify-center flex-shrink-0">
        {emoji}
      </span>
      <span className="w-5 h-5 text-base leading-5 text-white flex items-center justify-center flex-shrink-0">
        {count}
      </span>
    </div>
  )
}

export default BadgeEmoji

