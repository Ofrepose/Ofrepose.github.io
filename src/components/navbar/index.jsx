import React, { useEffect, useState } from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import navbarimage from "assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "assets/img/avatars/avatar4.png";
import bracket from 'assets/img/bracket.png';
import bracket2 from 'assets/img/bracket2.png';
import blink from 'assets/img/bracket3.png';
import wink from 'assets/img/wink.png';

import { useAuth } from "../../contexts/user/AuthContext";
import { useSystem } from "contexts/Systems/SystemContext";
import Logo from "components/brand/Logo";
import bugHub1 from 'assets/img/bighub1.png';

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const { user, signOut, setMode, darkmode } = useAuth();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const { myState } = useSystem();
  const [avatarState, setAvatarState] = useState();
  const rando = [bracket2, blink];

  useEffect(()=>{
    setAvatarState(rando[[Math.floor(Math.random() * rando.length)]])
  },[myState])

  return (
    <nav className="fixed top-4 md:!bottom-20 md:top-auto z-40 ">
      <div className="fixed  right-0 md:right-auto md:!left-4  mt-[3px] flex h-[61px] flex-grow items-center justify-around gap-2 
      rounded-full bg-creamyWhite px-2 py-2 shadow-xl md:flex-grow-0 md:gap-1  xl:gap-2">
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* Profile & Dropdown */}
        <Dropdown
          setAvatarOpen={setAvatarOpen}
          button={
            // <img
            //   className="h-10 w-auto rounded-full cursor-pointer"
            //   src={avatarOpen ? bracket2 : avatarState}
            //   // src={myState === 'blink' ? avatarState : bracket}
            //   alt="Your face"
            //   onClick={() => setAvatarOpen(true)}

            // />
            // <Logo />
            <img
                src={bugHub1}
                alt="Logo"
                className={`md:px-2 px-1 md:h-10 h-8 cursor-pointer mx-4 ${avatarOpen ? 'rotate-90 ' : ''}`}
                style={{ width: 'auto' }}
                onClick={() => setAvatarOpen(true)}
            />
          }
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-creamyWhite bg-cover bg-no-repeat shadow-xl">
              <div className="p-4 cursor-default">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-grayBlue font-poppins ">
                    👋 Hey, {user?.firstName}
                  </p>{" "}
                </div>
              </div>
              <div className="h-px w-full bg-secondaryYellow w-[90%] m-auto dark:bg-white/20 " />

              <div className="flex flex-col p-4">
                <a
                  href=" "
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                  onClick={() => signOut()}
                >
                  Log Out
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max cursor-pointer"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
