import React from "react";

export const metadata = {
  title: "InvoiceLayout title",
  description: "InvoiceLayout description",
};

export default function InvoiceLayout({ children }) {
  return (
    <>
      <div className="w-full bg-green-700">Invoice 공통영역 Layout</div>
      {children}
    </>
  );
}
