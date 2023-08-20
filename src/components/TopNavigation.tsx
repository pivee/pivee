import Link from 'next/link';
import React from 'react';

export default function TopNavigation() {
  return (
    <div className="navbar bg-base-100 drop-shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Pivee</Link>
      </div>
      <div className="flex-none gap-2">
        {/* Disable "Search" until it's ready */}
        {/* <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/favicon.ico" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link href="/" className="justify-between">
                Profile
              </Link>
            </li>
            <li><Link href="https://github.com/pivee" target="_blank">GitHub</Link></li>
            <li><Link href="https://youtube.com/@pivee" target="_blank">YouTube</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
