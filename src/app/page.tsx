import Image from 'next/image'

export default function Page() {
  return (
    <main>
<div className="table-wrapper">
      <table border={1} cellPadding={10} cellSpacing={0}>
        <tr>
          <th colSpan={3}>Deep Dive Into Moby-Dick</th>
        </tr>
        <tr>
          <td>Posted By: Ivyne Muzenda</td>
          <td></td>
          <td>Date: 02/09/2025</td>
        </tr>
        <tr>
          <th>Beginning</th>
          <th>Middle</th>
          <th>End</th>
        </tr>
        <tr>
          <td>
            In the beginning of Moby-Dick, Ishmael the narrator introduces himself, he gives us a clear background of his restless urge to go out to sea and feel free whenever he feels depressed or trapped on land. Seeking adventure and escape he joins a whaling voyage out of New Bedford, Massachusetts, setting the stage for the epic journey that follows.
          </td>
          <td>
            As the novel progresses Ishmael and his new crew settle into life aboard a whaling ship Pequod. We get to know captain Ahab and his obsession with hunting a sperm whale, Moby-Dick, the creature that took his leg. The story shifts between day to day details of whaling life like the dangers of the sea or the rituals of hunting and a mix of cultures around sailors and Ahabs growing obsession to find and kill the whale at any cost
          </td>
          <td>
            In the final part of the novel, Ahab finally finds Moby-Dick, A massive, deadly chase unfolds across the open sea. Despite the crew’s efforts, Ahab’s obsession carries them to disaster, Pequod is destroyed by the whale killing the crew but Ishmael, who clings in a lifeboat similar to that of a coffin floating alone at sea until he is saved, lives to tell the story, maybe marking the end of his adventures at sea <a href="">the end</a> of his sea adventures
          </td>
        </tr>
        <tr>
          <td>
            <Image
              src="https://i.postimg.cc/rwW1kqGZ/Screenshot-20250903-003701-Chrome.jpg"
              alt="Beginning"
              width={300}
              height={200}
              id="img1"
            />
          </td>
          <td>
            <Image
              src="https://i.postimg.cc/fbD9QmRk/Screenshot-20250903-003919-Chrome.jpg"
              alt="Middle"
              width={300}
              height={200}
              id="img2"
            />
          </td>
          <td>
            <Image
              src="https://i.postimg.cc/hGDrgfD4/Screenshot-20250903-004045-Chrome.jpg"
              alt="End"
              width={300}
              height={200}
              id="img3"
            />
          </td>
        </tr>
      </table>
</div>
    </main>
  )
}