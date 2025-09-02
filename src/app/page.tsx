import Image from 'next/image'

export default function MobyDickTable() {
  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      {/* Responsive wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border border-gray-300 border-collapse text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th colSpan={3} className="border border-gray-300 p-3 text-lg md:text-xl">
                Deep Dive Into Moby-Dick
              </th>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-medium">Posted By: Ivyne Muzenda</td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2 font-medium">Date: 02/09/2025</td>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Beginning</th>
              <th className="border border-gray-300 p-2">Middle</th>
              <th className="border border-gray-300 p-2">End</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 align-top">
                In the beginning of Moby-Dick, Ishmael the narrator introduces himself...
              </td>
              <td className="border border-gray-300 p-2 align-top">
                As the novel progresses Ishmael and his new crew settle into life aboard...
              </td>
              <td className="border border-gray-300 p-2 align-top">
                In the final part of the novel, Ahab finally finds Moby-Dick...
                <a href="" className="text-blue-600 underline hover:text-blue-800">the end</a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                <Image
                  src="https://i.postimg.cc/rwW1kqGZ/Screenshot-20250903-003701-Chrome.jpg"
                  alt="Beginning"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded"
                  id="img1"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <Image
                  src="https://i.postimg.cc/fbD9QmRk/Screenshot-20250903-003919-Chrome.jpg"
                  alt="Middle"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded"
                  id="img2"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <Image
                  src="https://i.postimg.cc/hGDrgfD4/Screenshot-20250903-004045-Chrome.jpg"
                  alt="End"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded"
                  id="img3"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}