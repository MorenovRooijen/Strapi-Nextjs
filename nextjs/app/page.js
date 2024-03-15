import { Constants } from "@/constants";
import Image from "next/image";

export default async function Home() {
  const response2 = await fetch("https://p3001.moreno.nan.codes/api/paginas/1?populate[0]=Content", {
    headers: { Authorization: `Bearer ${Constants.TOKEN}` },
  })
  const data2 = await response2.json();
  const {Content} = data2?.data?.attributes || {}
  console.log(Content)
  return (
    <div>
      <h1>Test</h1>
      {Content.map((item, index) => {
            switch (item.__component) {
              case "website.afbeelding-met-tekst":
                return (
                  <div key={index}>
                    <h2>{item.Titel}</h2>
                    <p>{item.Tekst}</p>
                    <Image
                      // src="https://via.placeholder.com/150"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                    />
                  </div>
                )
              default:
                return null
            }

      })}
      <pre>{JSON.stringify(Content, null, 2)}</pre>
    </div>
  );
}
