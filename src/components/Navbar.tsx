'use client'
import { useState } from "react";
import HamburgerButton from "./ui/HamburgerButton";
import SearchBar from "./ui/SearchBar";
import { LuShoppingCart } from "react-icons/lu";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isLogginedIn, setIsLogginedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">Culture Terville</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <LuShoppingCart className="text-xl" />
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <p className="text-sm">Votre panier est vide</p>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">Voir le panier</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <FaUser className="text-xl" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {isLogginedIn ? (
              <>
                <li>
                  <a href="#" className="menu-title">Mon compte</a>
                </li>
                <li>
                  <a href="#" className="menu-title">Mes commandes</a>
                </li>
                {isAdmin && (
                  <li>
                    <a href="#" className="menu-title">Administration</a>
                  </li>
                )}
                <li>
                  <a href="#" className="menu-title">Déconnexion</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="#" className="menu-title">Connexion</a>
                </li>
                <li>
                  <a href="#" className="menu-title">Inscription</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar