import React from 'react'

import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';
import Header from '@/components/header';
import Footer from '@/components/footer';

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section className="p-4">
        <h1>Welcome to my app!</h1>
        <p>Hello! My name is Aaron and I love to build applications that solve problems for our most pressing issues we face in our world today.</p>
        <Button>Button</Button>
        <div className="flex gap-2">
          <ThemeToggle />
        </div>
      </section>
      <Footer />
    </>
  );
}
