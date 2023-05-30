"use client"
import React from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Dialog } from "@/components/shared/Dialog";
import { Button } from "@/components/shared/Button";
import styles from "./page.module.css";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Button
          label="Open Dialog"
          onClick={() => setOpen(true)}
        />
      </main>
      <Footer />
      <Dialog
        title="Titulo"
        isOpen={open}
        onClose={() => setOpen(!open)}
        closeOnOverlayClick
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center"
        }}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis mattis consectetur. Cras at nulla sem. Pellentesque lacinia porta ultricies. Phasellus sodales elit vel nibh blandit, non dictum lacus aliquam. Phasellus feugiat arcu quis urna commodo lobortis. Nunc non neque venenatis, posuere enim vel, rhoncus turpis. Suspendisse vestibulum ac tortor at scelerisque. Etiam placerat, erat efficitur commodo mollis, ipsum neque lobortis purus, vel tempus nisi mauris quis diam. Mauris dictum libero elementum, mollis felis et, tristique mi.

            In posuere accumsan diam ac egestas. Maecenas bibendum arcu laoreet suscipit interdum. Sed semper scelerisque lectus, vitae suscipit arcu dapibus ut. Fusce sit amet libero sollicitudin, consequat massa non, rutrum erat. Aliquam ut arcu iaculis felis suscipit maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod elit ac ex laoreet aliquet. In porta, metus quis tincidunt semper, turpis massa tempor nisi, id rutrum tortor metus et tortor. Nullam vitae libero lorem. Donec gravida a tortor eget ullamcorper. Morbi lobortis posuere massa id accumsan.
          </span>
          <Image src="https://img.freepik.com/fotos-premium/pessoas-sorridentes-em-uma-sessao-de-terapia-de-grupo_23-2148752038.jpg?w=2000" width={350} height={300} alt="Equipe" />
        </div>
      </Dialog>
    </>
  )
}
