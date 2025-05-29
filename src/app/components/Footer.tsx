function Footer() {
  return (
    <footer className="p-4 flex flex-col gap-2">
      <p className="text-center font-extralight text-sm text-accent2">
        <span className="text-center font-extralight text-sm text-accent2">
          Serenade HN (Copyright 2025)
        </span>
      </p>
      <ul className="m-auto flex justify-center gap-4">
        <li className="w-fit">
          <a
            href="https://www.instagram.com/serenade.hn"
            target="_blank"
            className="text-accent2"
          >
            Instagram
          </a>
        </li>
        <li className="w-fit">
          <a
            href="https://www.facebook.com/profile.php?id=61567475505515"
            target="_blank"
            className="text-accent2"
          >
            Facebook
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
