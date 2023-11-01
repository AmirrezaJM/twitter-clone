import { BsHouseFill,BsBellFill } from 'react-icons/bs';
import {BiLogOut} from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';
const Sidebar = () => {
    const items = [
        {
            label: "Home",
            href: "/",
            icon: BsHouseFill
        },
        {
            label: "Notification",
            href: "/notification",
            icon: BsBellFill
        },
        {
            label: "profile",
            href: "/profile",
            icon: FaUser
        },
    ]
  return (
    <div>
        <div>
            <SidebarLogo />
            {items.map((item) => {
                return (
                    <SidebarItem key={item.href} href={item.href} label={item.label} icon={item.icon} />
                );
            })}
            <SidebarItem onClick={() => {}} icon={BiLogOut} label='Logout' />
            <SidebarTweetButton />
        </div>
    </div>
  )
}

export default Sidebar