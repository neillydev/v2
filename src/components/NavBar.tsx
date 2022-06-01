import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();

    return (
        <header className='navHeader'>
            <nav className='nav'>

            </nav>
        </header>
    )
};