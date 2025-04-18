// components/module/cta/Cta_01.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/ui/frame/PageContent";
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite";

const Cta_01 = () => {
  return (
    <>
      <PageContent className="bg-accentColor">
        <section className="md:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
          <p className="text-center text-[22px] text-white font-bold">
            詳しく知りたい方は
            <br />
            こちらからお問い合わせ！
          </p>
          <div>
            <FreeButtonWhite href="/" text="お問い合わせ" />
          </div>
        </section>
      </PageContent>
    </>
  );
};

export default Cta_01;
