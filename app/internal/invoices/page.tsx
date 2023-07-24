"use client";

import { Button } from "@mantine/core";
import { jsPDF } from "jspdf";

export default function Page() {
  const generatePdf = (data: any) => {
    //  TODO: igoners that the constructor doesnt have upperase
    //  @ts-igonre
    const doc = new jsPDF({});
//Logo ReKrabice
    doc.text("Faktura 2023-11-01", 0, 0);
    //Bankovní účet
    // 77777/5220
    //Variabilní symbol
    // 20231101
    //Způsob platby
    // Převodem

    //Odběratel
    //Logo Odběratele
    // Odběratel s.r.o.
    // Ullice 202/2
    // 62% %% praha
    // ič
    // dič

    //datum vystavení
    //20.20.2023
    //datum danitelného
    //2023
    //datum zplatnosti
    //2023

    //Prosíme o zaplacení částky

    //1000
    // ReKrabice modrá 100 x 100 x 100
    //Cena za mj
    //Celkem

//https://www.fakturoid.cz/vzor-faktury
    doc.text("Děkujeme Vám, že jste ušetřili XX stromů!", 0, 0);
    doc.text("ReKrabice s.r.o.", 0, 0);
    doc.text("Nové sady 22/2", 0, 0);
    doc.text("Brno 602 00", 0, 0);
    doc.text("IČ", 0, 0);
    doc.text("DIČ", 0, 0);



    doc.text("Faktura 2023-11-01", 0, 0);

    doc.save(`Faktura${data.retailer}.pdf`);
    
    //QR platba api
    http://api.paylibo.com/paylibo/generator/czech/image?accountNumber=222885&bankCode=5500&amount=250.00&currency=CZK&vs=333&message=FOND%20HUMANITY%20CCK


  };

  const handleClick = async () => {
    const obj = {retailer: "Aktin"}
    generatePdf(obj);
  };
  return (
    <Button
      onClick={handleClick}
      className="absolute top-1/2 left-1/2 -translate-x-1/2"
    >
      Generovat etikety
    </Button>
  );
}

const PAGE_WIDTH = 52;
const PAGE_HEIGHT = 37;
const SAFE_ZONE = 4;
