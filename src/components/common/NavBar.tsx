import { IconButton } from './IconButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Variant } from './Button';
import Logo from '../../assets/logo.png';
import { FaUserAlt } from 'react-icons/fa';
import { SidePanel, Size } from './SidePanel';
import { routes } from '../../routes/routes';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const NavBar = () => {

  const [isShowSidePanel, setIsShowSidePanel] = useState(false);


  const onShowSidePanel = () => {
    setIsShowSidePanel(true);
  }

  const onHideSidePanel = () => {
    setIsShowSidePanel(false);
  }

  return (
    <div className='max-h-12 max-w-screen overflow-hidden'>
      <div className='h-12 w-full px-4 flex justify-between bg-white rounded-b items-center rounded-l-lg rounded-b-lg'>
        <IconButton icon={GiHamburgerMenu} onClick={onShowSidePanel} variant={Variant.SECONDARY} />
        <div>
          <img className='h-9' src={Logo} alt='logo' />
        </div>
        <IconButton icon={FaUserAlt} onClick={() => {}} variant={Variant.SECONDARY} />
      </div>
      {
        isShowSidePanel && (
          <SidePanel isShow={isShowSidePanel} size={Size.LARGE}>
            <div className='p-5 relative'>
              <div className='absolute -top-4 -left-4'>
                <IconButton icon={AiOutlineClose} onClick={onHideSidePanel} variant={Variant.SECONDARY} />
              </div>
              {routes.map((r) => {
                if(r.showInNavbar) {
                  return (
                    <div key={r.to} className='text-primary flex items-center border-b border-primary'>
                      <NavLink key={r.to}
                               to={r.to}
                               className={'relative'}
                               style={{top: '3px'}}>
                        {r.name}
                      </NavLink>
                    </div>
                  )
                }
                return (<></>)
              })}
            </div>
          </SidePanel>
        )
      }
    </div>
  )
}