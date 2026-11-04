"use client";

export function PrintButton() {
  return (
    <button className="button button-primary print-button" onClick={() => window.print()} type="button">
      Salvar em PDF <span aria-hidden="true">↓</span>
    </button>
  );
}
