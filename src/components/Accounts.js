import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

const Accounts = ({ accounts, show, onExpand, setBox }) => {
    const collapse = show;

    return (
        <div className='accounts'>
            <React.Fragment>
                {accounts.map((account => (
                    <div className='account' key={account.id}>
                        <p className='account_name' onClick={() => (collapse === account.id ? onExpand([]) : onExpand(account.id))}><FaCaretDown style={{ cursor: 'pointer' }} />{account.name}</p>
                        
                        {account.id === show && <React.Fragment>
                            {account.subMenus.map((box => (
                                <div className='box' key={box.id} onClick={() => setBox(box.id)}  >
                                    {box.name}
                                    
                                </div>
                            )))}
            </React.Fragment>}

                        {/* {console.log(boxSelect)} */}
                    </div>

                )))}
            </React.Fragment>
            
        </div>
    )
}


export default Accounts

