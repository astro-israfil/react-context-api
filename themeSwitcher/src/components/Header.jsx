import React from 'react'
import { useTheme } from '../context/theme';

const Header = () => {
   const {theme, setTheme} = useTheme();
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <label className="label cursor-pointer">
                    <span className="label-text">Switch theme</span>
                    <input type="checkbox" checked={theme === 'dark'} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} className="toggle toggle-primary" defaultChecked />
                    </label>
                </li>
            <li><a>Link</a></li>
            <li>
                <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;