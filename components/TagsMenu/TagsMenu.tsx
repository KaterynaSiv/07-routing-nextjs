"use client";

import Link from "next/link";
import css from "./TagsMenu.module.css";
import { NoteTag } from "@/types/note";
import { useState } from "react";

type TagsMenuProps = { tagsOption: NoteTag[] };

export default function TagsMenu({ tagsOption }: TagsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={handleOpen}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link href="/notes/filter" className={css.menuLink}>
              All
            </Link>
          </li>
          {tagsOption.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
