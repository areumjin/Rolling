import React from 'react'

/**
 * BadgeEmoji 컴포넌트 - 이모지 배지
 * @param {string} emoji - 표시할 이모지
 * @param {number} count - 표시할 숫자
 */
function BadgeEmoji({ emoji, count }) {
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

