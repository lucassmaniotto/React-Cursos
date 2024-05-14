import Link from "next/link";

function SobrePage() {
  return (
    <div>
      Você está na página sobre

      <ul>
        <li>
          <Link href="/">
            <a>Ir para a Home</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SobrePage;
