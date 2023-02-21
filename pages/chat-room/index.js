import React, { useEffect, useState } from 'react'
import { faUser, faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextareaAutosize from 'react-textarea-autosize';
import { formatAddress } from '@/common/function'
import { useRouter } from 'next/router'

import styles from './ChatRoom.module.scss'

function ChatRoom() {
  const router = useRouter()

  const [account, setAccount] = useState()

  const handleDisconnect = () => {
    window.ethereum.disconnect()
    localStorage.removeItem('ID_CHAT')
    router.push('/')
  }

  useEffect(() => {
    setAccount(localStorage.getItem('ID_CHAT'))
  }, [])

  return (
    <div className={styles.chatRoomContainer}>
      <div className="header-chat">
      <div className="header-chat__content">
      <div className="head-left">
        <div className="icon-user">
          <FontAwesomeIcon icon={faUser} />
        </div>

          <div className="info-user">
            {formatAddress(account)}

            <div className="status-user"></div>
          </div>
        </div>

        <div className="head-right">
          <button className='btn-disconnect' onClick={handleDisconnect}>Disconnect</button>
        </div>
        </div>
      </div>
      
      <div className="chat-body">
        <div className="chat-content">
          <div className="chat-show">
            <div className="item-chat">
              <div className="text-account">
                <div className="icon-user">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                
                {formatAddress(account)}
              </div>

              <div className="text-chat">
                alo 123
              </div>
            </div>
            
            <div className="item-chat item-chat--guest">
              <div className="text-account">
                <div className="icon-user">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                
                {formatAddress('0x12893u948u31981u9128319ue8921ey89')}
              </div>

              <div className="text-chat">
                alo 123
              </div>
            </div>
          </div>

          <div className="input-container">
            <TextareaAutosize
              className='input-form'
              placeholder='Enter message'
              // onChange={onChange}
              // value={value}
              minRows={1}
            />
            {/* <input type="text" className="input-form" /> */}

            <div className="box-rep">
              <FontAwesomeIcon icon={faReply}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom